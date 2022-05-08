import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {Icon} from "@iconify/react";
import goToCategoryIcon from "@iconify/icons-ic/twotone-keyboard-arrow-left";
import closeIcon from "@iconify/icons-ic/twotone-close";

import styles from './CategoriesMenu.module.scss';
import {Category} from "../../types/category";
import IconButton from "../elements/button/IconButton";
import MarketContext from "../../contexts/MarketContext";

interface Props {
  show?: boolean;
  categories?: Category[];
  onClose?: () => void;
}

const CategoriesMenu: React.FC<Props> = ({show, categories, onClose}) => {
  const {data:marketContextData} = useContext(MarketContext);
  const {vendor} = useParams();
  return (
    <>
      {show && categories && (
        <div className={styles.CategoriesMenu}>
          <div className={styles.Header}>
            <span>
              دسته‌بند‌ی‌ها:
              {' '}
              {marketContextData.categoryTitle}
            </span>
            <IconButton
              icon={closeIcon}
              color='light'
              size='large'
              onClick={onClose}
            />
          </div>
          <div className={styles.Categories}>
            {categories.map(category => {
              const link = `/${vendor}/${category.id}/`;
              return (
                <Link to={link} className={styles.Item} key={category.id}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className={styles.Image}
                  />
                  <div className={styles.Title}>{category.title}</div>
                  <Icon className={styles.Icon} icon={goToCategoryIcon}/>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CategoriesMenu;
