import React from "react";
import styles from './ProductList.Loading.module.scss';
import ProductCardLoading from "./ProductCard.Loading";

const ProductListLoading: React.FC = () => {
  return (
    <div className={styles.ProductListLoading}>
      <div className={styles.Item}><ProductCardLoading/></div>
      <div className={styles.Item}><ProductCardLoading/></div>
      <div className={styles.Item}><ProductCardLoading/></div>
      <div className={styles.Item}><ProductCardLoading/></div>
    </div>
  );
}

export default ProductListLoading;
