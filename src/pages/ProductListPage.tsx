import React from "react";

import styles from "./ProductListPage.module.scss";
import Page from "../components/page/Page";
import useProductVariation from "../hooks/useProductVariation";
import {useParams} from "react-router-dom";
import ProductList from "../components/product/ProductList";
import {useQuery} from "../hooks/useQuery";

const ProductListPage: React.FC = () => {
  const {vendor, catId} = useParams();
  const query = useQuery();
  const {data, isLoaded} = useProductVariation({
    vendorCode: `${vendor}`,
    menu_category_id: catId ? parseInt(catId) : undefined,
    fetch_categories: 1,
    fetch_filters: 1,
    size: 4,
    page: parseInt(`${query.get('page')}`),
    sort: query.get('sort') ? `${query.get('sort')}` : undefined,
  }, [query, vendor, catId]);

  return (
    <div className={styles.ProductListPage}>
      <Page>
        {isLoaded ? (
          <ProductList products={data?.data?.product_variations}/>
        ) : (
          <div>Loading...</div>
        )}
      </Page>
    </div>
  );
}

export default ProductListPage;
