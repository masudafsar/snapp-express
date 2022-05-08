import React, {useCallback, useContext, useEffect, useState} from "react";

import styles from "./Header.module.scss";
import CategoriesMenu from "./CategoriesMenu";
import MainHeader from "./MainHeader";
import MarketContext from "../../contexts/MarketContext";
import {useLocation} from "react-router-dom";
import SortByMenu from "./SortByMenu";

interface Props {
}

const Header: React.FC<Props> = () => {
  const {data: marketContextData} = useContext(MarketContext);
  const location = useLocation();

  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const toggleCategoryMenu = useCallback(() => {
    setShowCategoriesMenu(prevState => !prevState);
  }, []);

  const [showSortByMenu, setSortByMenu] = useState(false);
  const toggleSortByMenu = useCallback(() => {
    setSortByMenu(prevState => !prevState);
  }, []);

  useEffect(() => {
    setShowCategoriesMenu(false);
    setSortByMenu(false);
  }, [location])

  return (
    <div className={styles.Header}>
      <MainHeader
        onCategoryListButtonClick={toggleCategoryMenu}
        onSortButtonClick={toggleSortByMenu}
      />
      <CategoriesMenu
        categories={marketContextData.categories}
        show={showCategoriesMenu}
        onClose={toggleCategoryMenu}
      />
      <SortByMenu
        sort={marketContextData.sort}
        show={showSortByMenu}
        onClose={toggleSortByMenu}
      />
    </div>
  );
}

export default Header;
