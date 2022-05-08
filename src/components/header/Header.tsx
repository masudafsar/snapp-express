import React, {useCallback, useContext, useEffect, useState} from "react";

import styles from "./Header.module.scss";
import CategoriesMenu from "./CategoriesMenu";
import MainHeader from "./MainHeader";
import MarketContext from "../../contexts/MarketContext";
import {useLocation} from "react-router-dom";

interface Props {
}

const Header: React.FC<Props> = () => {
  const location = useLocation();
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const toggleCategoryMenu = useCallback(() => {
    setShowCategoriesMenu(prevState => !prevState);
  }, []);
  const {data} = useContext(MarketContext);

  useEffect(() => {
    setShowCategoriesMenu(false);
  }, [location])

  return (
    <div className={styles.Header}>
      <MainHeader
        onCategoryListButtonClick={toggleCategoryMenu}
      />
      <CategoriesMenu
        categories={data.categories}
        show={showCategoriesMenu}
        onClose={toggleCategoryMenu}
      />
    </div>
  );
}

export default Header;
