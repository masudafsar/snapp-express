import React, {useContext} from "react";

import styles from "./ProductListPage.module.scss";
import Page from "../components/page/Page";
import MarketContext from "../contexts/MarketContext";

const ProductListPage: React.FC = () => {
  const {setData} = useContext(MarketContext);

  return (
    <div className={styles.ProductListPage}>
      <Page>

      </Page>
    </div>
  );
}

export default ProductListPage;
