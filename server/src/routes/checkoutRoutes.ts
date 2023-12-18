import { Router } from 'express';
import {
  createStripeCharge,
} from '../controllers/checkoutController';
import { protect } from '../middleware';

const router = Router();

router.route('/create-stripe-charge').post(protect, createStripeCharge);

export { router as checkOutRoutes };
