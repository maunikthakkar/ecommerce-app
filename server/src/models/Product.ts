import { Schema, model, Document } from 'mongoose';

const { String, Number } = Schema.Types;

export interface ProductDocument extends Document {
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const productSchema = new Schema(
  {
    id:Number,
    title: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    rate: Number,
    count: Number
  },
  {
    timestamps: true,
  }
);

productSchema.index(
  {
    name: 'text',
  },
  {
    weights: {
      name: 3,
    },
  }
);

export const Product = model<ProductDocument>('Product', productSchema);
