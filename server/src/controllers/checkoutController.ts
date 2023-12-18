import { Request, Response } from 'express';
import { Cart, Order } from '../models';
import { User as UserType } from '../types';
import { createPaymentIntent } from '../lib/stripe';

const getCart = async (req: Request) => {
  const user = req.user as UserType;
  return await Cart.findOne({ user: user._id }).populate('items.product');
};

const calculateCartTotal = async (req: Request) => {
  const cart = await getCart(req);
  const total = cart?.items.reduce(
    (acc: any, el: any) => acc + el.product.price * el.quantity,
    0
  );
  return total;
};

const createOrder = async (
  userId: string,
  amount: number,
  paymentMethod: string
) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) return;

  const order = await Order.create({
    user: userId,
    total: amount,
    items: cart.items,
    paymentMethod,
  });

  await Cart.findOneAndUpdate({ _id: cart._id }, { $set: { items: [] } });

  return order;
};

export const createStripeCharge = async (req: Request, res: Response) => {
  const user = req.user as UserType;
  const { paymentMethodId } = req.body;
  try {
    const totalAmount = await calculateCartTotal(req);
    await createPaymentIntent(totalAmount, paymentMethodId);
    const order = await createOrder(user._id, totalAmount, 'stripe');
    res.status(200).json({ data: order });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Unexpected error occured. Please try again later.' });
  }
};
