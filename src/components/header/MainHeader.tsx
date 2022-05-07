import React from "react";
import {Icon} from "@iconify/react";
import categoryIcon from "@iconify/icons-ic/twotone-format-list-bulleted";
import caretIcon from "@iconify/icons-ic/twotone-keyboard-arrow-down";
import searchIcon from "@iconify/icons-ic/twotone-search";

import IconButton from "../elements/button/IconButton";

import styles from './MainHeader.module.scss';

interface Props {
  onCategoryListClick?: () => void;
  onTitleClick?: () => void;
  onSearchClick?: () => void;
}

const MainHeader: React.FC<Props> = (
  {
    onCategoryListClick,
    onTitleClick,
    onSearchClick
  }
) => {
  return (
    <div className={styles.MainHeader}>
      <div className={styles.Container}>
        <IconButton
          icon={categoryIcon}
          color="light"
          size="large"
          onClick={onCategoryListClick}
        />
        <h1
          className={styles.Title}
          onClick={onTitleClick}
        >
          سوپرمارکت
          <Icon icon={caretIcon} inline={true}/>
        </h1>
        <IconButton
          icon={searchIcon}
          color="light"
          size="large"
          onClick={onSearchClick}
        />
      </div>
    </div>
  );
}

export default MainHeader;
