export type Product = {
  _id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
};

export interface ProductsData {
  products: Product[];
  total: number;
}

export interface ProductData {
  product: Product;
  relatedProducts: Product[];
}

export interface AddProduct {
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export interface AddProductData {
  product: Product;
}

export type Products = Product[];
