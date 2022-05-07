import React from "react";
import cn from 'classnames';
import goToCategoryIcon from "@iconify/icons-ic/twotone-keyboard-arrow-left";

import styles from './CategoriesMenu.module.scss';
import {Category} from "../../types/category";
import IconButton from "../elements/button/IconButton";

interface Props {
  show?: boolean;
  categories?: Category[];
}

const CategoriesMenu: React.FC<Props> = ({show, categories}) => {
  return (
    <>
      {show && categories && (
        <div className={styles.CategoriesMenu}>
          <span>دسته‌بند‌ی‌ها:</span>
          <div className={styles.Categories}>
            {categories.map(category => {
              return (
                <div className={styles.Item} key={category.id}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className={styles.Image}
                  />
                  <div className={styles.Title}>{category.title}</div>
                  <IconButton icon={goToCategoryIcon} color='light' size='large'/>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CategoriesMenu;
