import React from "react";
import cn from 'classnames';

import styles from './ProductCard.module.scss';
import {Product} from "../../types/Product";
import {digitToPersian} from "../../utils/persian-tools";
import Button from "../elements/button/Button";

interface Props {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<Props> = ({product, className}) => {
  return (
    <div className={cn(styles.ProductCard, className)}>
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
          {product.price.toLocaleString('fa-IR')}
          {' '}
          <span>تومان</span>
        </div>
        <Button
          size='normal'
          variant='outline'
          color='primary'
          className={styles.BuyButton}
        >
          افزودن
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
