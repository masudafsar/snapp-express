import React from "react";
import styles from './SortByMenu.module.scss';
import IconButton from "../elements/button/IconButton";
import closeIcon from "@iconify/icons-ic/twotone-close";
import {Sort} from "../../types/meta/sort";
import {Link, To, useLocation} from "react-router-dom";
import {Icon} from "@iconify/react";
import goToCategoryIcon from "@iconify/icons-ic/twotone-keyboard-arrow-left";
import cn from "classnames";
import {useQuery} from "../../hooks/useQuery";

interface Props {
  show?: boolean;
  onClose?: () => void;
  sort?: Sort;
}

const SortByMenu: React.FC<Props> = ({sort, show, onClose}) => {
  const location = useLocation();
  const params = useQuery();

  const activeSort = sort?.results.find(sort => sort.enabled)

  const getUrl = (sort?: string): To => {
    if (sort)
      params.set('sort', sort);
    else
      params.delete('sort');
    return {
      pathname: location.pathname,
      search: `?${params.toString()}`,
    };
  }

  return (
    <>
      {show && (
        <div className={styles.SortByMenu}>
          <div className={styles.Header}>
            <span>
              مرتب‌سازی:
              {' '}
              {activeSort ? activeSort.translation : sort?.default_title}
            </span>
            <IconButton
              icon={closeIcon}
              color='light'
              size='large'
              onClick={onClose}
            />
          </div>

          {sort && (
            <div className={styles.Sort}>
              <Link to={getUrl(undefined)}
                    className={cn(styles.Item, !activeSort ? styles.Enabled : null)}>
                <div className={styles.Title}>{sort?.default_title}</div>
                <Icon className={styles.Icon} icon={goToCategoryIcon}/>
              </Link>
              {sort.results.map(sortItem => {
                return (
                  <Link to={getUrl(sortItem.name)}
                        className={cn(styles.Item, sortItem.enabled ? styles.Enabled : null)}
                        key={sortItem.name}>
                    <div className={styles.Title}>{sortItem.translation}</div>
                    <Icon className={styles.Icon} icon={goToCategoryIcon}/>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SortByMenu;
