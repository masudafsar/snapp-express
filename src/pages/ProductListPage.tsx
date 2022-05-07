import React, {useContext, useEffect} from "react";

import styles from "./ProductListPage.module.scss";
import Page from "../components/page/Page";
import MarketContext from "../contexts/MarketContext";
import useProductVariation from "../hooks/useProductVariation";
import {useParams} from "react-router-dom";

const ProductListPage: React.FC = () => {
  const {setData} = useContext(MarketContext);
  const {vendor, catId} = useParams();
  const {data} = useProductVariation({
    vendorCode: `${vendor}`,
    menu_category_id: catId ? parseInt(catId) : undefined,
    fetch_categories: 1,
  });
  useEffect(() => {
    setData(prevState => {
      const newState = {...prevState};
      newState.categories = data?.data?.categories;
      return newState;
    });
  }, [data])

  return (
    <div className={styles.ProductListPage}>
      <Page>
        
      </Page>
    </div>
  );
}

export default ProductListPage;
