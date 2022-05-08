import React from "react";

import styles from './ProductCard.module.scss';
import {Product} from "../../types/Product";
import {digitToPersian} from "../../utils/persian-tools";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <div className={styles.ProductCard}>
      <div className="border border-2 border-gray-900">
        {digitToPersian(product.title)}
        {digitToPersian(`${product.price}`)}
      </div>
    </div>
  );
}

export default ProductCard;
