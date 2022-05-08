import React from "react";

import styles from './ProductCard.module.scss';
import {Product} from "../../types/Product";
import {digitToPersian} from "../../utils/persian-tools";
import Button from "../elements/button/Button";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <div className={styles.ProductCard}>
      <img
        src={product.featured}
        alt={digitToPersian(product.title)}
        className={styles.Image}
      />
      <div className={styles.Details}>
        <div className={styles.Title}>
          {digitToPersian(product.title)}
        </div>
        <div className={styles.Price}>
          {digitToPersian(`${product.price}`)}
          {' '}
          <span>تومان</span>
        </div>
        <Button
          size='normal'
          variant='outline'
          color='primary'
          className={styles.BuyButton}
        >
          اضافه به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
