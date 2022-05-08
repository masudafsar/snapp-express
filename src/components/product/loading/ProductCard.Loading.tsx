import React from "react";
import styles from './ProductCard.Loading.module.scss';

const ProductCardLoading: React.FC = () => {
  return (
    <div className={styles.ProductCardLoading}>
      <div className={styles.Image}/>
      <div className={styles.Details}>
        <div className={styles.Title}/>
        <div className={styles.Price}/>
        <div className={styles.BuyButton}/>
      </div>
    </div>
  );
}

export default ProductCardLoading;
