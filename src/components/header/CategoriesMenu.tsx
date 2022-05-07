import React from "react";
import cn from 'classnames';

import styles from './CategoriesMenu.module.scss';
import {Category} from "../../types/category";

interface Props {
  show?: boolean;
  categories?: Category[];
}

const CategoriesMenu: React.FC<Props> = ({show, categories}) => {
  return (
    <>
      {categories && (
        <div className={cn(styles.CategoriesMenu, show ? styles.Show : null)}>
          <span>دسته‌بند‌ی‌ها:</span>
          <div className={styles.Categories}>
            {categories.map(category => {
              return (
                <div className={styles.Item} key={category.id}>
                  <img src={category.image} alt={category.title}/>
                  <span>{category.title}</span>
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
