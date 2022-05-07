import React from "react";
import {Icon} from "@iconify/react";
import goToCategoryIcon from "@iconify/icons-ic/twotone-keyboard-arrow-left";
import closeIcon from "@iconify/icons-ic/twotone-close";

import styles from './CategoriesMenu.module.scss';
import {Category} from "../../types/category";
import IconButton from "../elements/button/IconButton";

interface Props {
  show?: boolean;
  categories?: Category[];
  onClose?: () => void;
}

const CategoriesMenu: React.FC<Props> = ({show, categories, onClose}) => {
  return (
    <>
      {show && categories && (
        <div className={styles.CategoriesMenu}>
          <div className={styles.Header}>
            <span>دسته‌بند‌ی‌ها:</span>
            <IconButton
              icon={closeIcon}
              color='light'
              size='large'
              onClick={onClose}
            />
          </div>
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
                  <Icon className={styles.Icon} icon={goToCategoryIcon}/>
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
