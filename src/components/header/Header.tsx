import React, {useCallback, useContext, useState} from "react";

import styles from "./Header.module.scss";
import CategoriesMenu from "./CategoriesMenu";
import MainHeader from "./MainHeader";
import MarketContext from "../../contexts/MarketContext";

interface Props {
}

const Header: React.FC<Props> = () => {
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const onMainHeaderTitleClick = useCallback(() => {
    setShowCategoriesMenu(prevState => !prevState);
  }, []);
  const {data} = useContext(MarketContext);

  return (
    <div className={styles.Header}>
      <MainHeader
        onTitleClick={onMainHeaderTitleClick}
      />
      <CategoriesMenu
        categories={data.categories}
        show={showCategoriesMenu}
      />
    </div>
  );
}

export default Header;
