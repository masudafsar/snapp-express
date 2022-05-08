import React, {useContext} from "react";
import cn from 'classnames';
import {Icon} from '@iconify/react';
import {Link, To, useLocation} from 'react-router-dom';
import prevIcon from "@iconify/icons-ic/twotone-keyboard-arrow-right";
import nextIcon from "@iconify/icons-ic/twotone-keyboard-arrow-left";

import styles from './Pagination.module.scss';
import MarketContext from "../../contexts/MarketContext";
import {digitToPersian} from "../../utils/persian-tools";
import {Pagination as PaginationType} from "../../types/pagination";
import {useQuery} from "../../hooks/useQuery";

interface Props {
}

const Pagination: React.FC<Props> = () => {
  const {data} = useContext(MarketContext);
  const {pagination} = data;
  const location = useLocation();
  const params = useQuery();

  const getUrl = (page: number): To => {
    params.set('page', `${page}`);
    return {
      pathname: location.pathname,
      search: `?${params.toString()}`,
    };
  }
  const getTotalPage = (pagination: PaginationType): number => {
    return Math.ceil(pagination.total / pagination.size);
  }

  return (
    <>
      {pagination && (
        <div className={styles.Pagination}>
          <Link to={getUrl(0)} className={styles.Item}>
            {digitToPersian(`1`)}
          </Link>

          {pagination.page - 1 >= 0 ? (
            <Link to={getUrl(pagination.page - 1)} className={styles.Item}>
              <Icon icon={prevIcon}/>
            </Link>
          ) : (
            <div className={styles.Item}>
              <Icon icon={prevIcon}/>
            </div>
          )}


          <div className={cn(styles.Item, 'flex-1')}>
            صفحه
            {' '}
            {digitToPersian(`${pagination.page + 1}`)}
            {' '}
            از
            {' '}
            {digitToPersian(`${getTotalPage(pagination)}`)}
          </div>

          {pagination.page + 1 <= getTotalPage(pagination) ? (
            <Link to={getUrl(pagination.page + 1)} className={styles.Item}>
              <Icon icon={nextIcon}/>
            </Link>
          ) : (
            <div className={styles.Item}>
              <Icon icon={nextIcon}/>
            </div>
          )}

          <Link to={getUrl(getTotalPage(pagination))} className={styles.Item}>
            {digitToPersian(`${getTotalPage(pagination)}`)}
          </Link>
        </div>
      )}
    </>
  );
}

export default Pagination;
