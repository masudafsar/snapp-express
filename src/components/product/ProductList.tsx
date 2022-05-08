import React from "react";

import styles from './ProductList.module.scss';
import {Product} from "../../types/Product";
import ProductCard from "./ProductCard";

interface Props {
  products?: Product[];
}

const ProductList: React.FC<Props> = ({products}) => {
  return (
    <div className={styles.ProductList}>
      {products && products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          className={styles.Item}
        />
      ))}
    </div>
  );
}

export default ProductList;
