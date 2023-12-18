import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { WishlistButton } from '@/components/wishlist';
import { Product } from '@/types';
import formatPrice from '@/utils/formatPrice';

import styles from './ProductCard.module.css';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} legacyBehavior>
        <div className={styles.card}>
          <div className={styles.productImgWrapper}>
            <Image src={product.image} alt={product.title} height={500} width={500} priority={true} />
            <div className={styles.wishlistButtonContainer}>
              <WishlistButton productId={product._id} />
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productName}>{product.title}</div>
            <div className={styles.productPrice}>{formatPrice(product.price)}</div>
          </div>
        </div>
    </Link>
  );
};

export default ProductCard;
