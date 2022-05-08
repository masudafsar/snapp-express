import React from "react";
import categoryIcon from "@iconify/icons-ic/twotone-format-list-bulleted";
import sortIcon from '@iconify/icons-ic/twotone-sort';

import IconButton from "../elements/button/IconButton";

import styles from './MainHeader.module.scss';
import {Link} from "react-router-dom";

interface Props {
  onCategoryListButtonClick?: () => void;
  onTitleClick?: () => void;
  onSortButtonClick?: () => void;
}

const MainHeader: React.FC<Props> = (
  {
    onCategoryListButtonClick,
    onTitleClick,
    onSortButtonClick
  }
) => {
  return (
    <div className={styles.MainHeader}>
      <div className={styles.Container}>
        <IconButton
          icon={categoryIcon}
          color="light"
          size="large"
          onClick={onCategoryListButtonClick}
        />
        <h1
          className={styles.Title}
          onClick={onTitleClick}
        >
          <Link to='/'>
            سوپرمارکت
          </Link>
        </h1>
        <IconButton
          icon={sortIcon}
          color="light"
          size="large"
          onClick={onSortButtonClick}
        />
      </div>
    </div>
  );
}

export default MainHeader;
