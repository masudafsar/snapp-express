import React from "react";

import styles from './CategoriesMenu.module.scss';
import {Category} from "../../types/category";

interface Props {
  categories?: Category[];
}

const CategoriesMenu: React.FC<Props> = ({categories}) => {
  return (
    <>
      {categories && (
        <div className={styles.CategoriesMenu}>
          <span>دسته‌بند‌ی‌ها:</span>
          <div className={styles.Categories}>
            {categories.map(category => {
              return (
                <div className={styles.Item} key={category.id}>
                  {category.title}
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
