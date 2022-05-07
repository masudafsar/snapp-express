import React from "react";

import styles from "./Header.module.scss";
import CategoriesMenu from "./CategoriesMenu";
import MainHeader from "./MainHeader";

interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.Header}>
      <MainHeader/>
      <CategoriesMenu/>
    </div>
  );
}

export default Header;
