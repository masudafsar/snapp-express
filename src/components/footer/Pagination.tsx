import React, {useContext} from "react";
import cn from 'classnames';
import {Icon} from '@iconify/react';
import {Link, To, useLocation} from 'react-router-dom';
import prevPageIcon from "@iconify/icons-ic/twotone-keyboard-arrow-right";
import nextPageIcon from "@iconify/icons-ic/twotone-keyboard-arrow-left";
import firstPageIcon
  from '@iconify/icons-ic/twotone-keyboard-double-arrow-right';
import lastPageIcon from '@iconify/icons-ic/twotone-keyboard-double-arrow-left';


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
          {pagination.page !== 0 ? (
            <Link to={getUrl(0)} className={styles.Item}>
              <Icon icon={firstPageIcon}/>
            </Link>
          ) : (
            <div className={cn(styles.Item, styles.DisabledItem)}>
              <Icon icon={firstPageIcon}/>
            </div>
          )}

          {pagination.page - 1 >= 0 ? (
            <Link to={getUrl(pagination.page - 1)} className={styles.Item}>
              <Icon icon={prevPageIcon}/>
            </Link>
          ) : (
            <div className={cn(styles.Item, styles.DisabledItem)}>
              <Icon icon={prevPageIcon}/>
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

          {pagination.page + 1 < getTotalPage(pagination) ? (
            <Link to={getUrl(pagination.page + 1)} className={styles.Item}>
              <Icon icon={nextPageIcon}/>
            </Link>
          ) : (
            <div className={cn(styles.Item, styles.DisabledItem)}>
              <Icon icon={nextPageIcon}/>
            </div>
          )}

          {pagination.page + 1 < getTotalPage(pagination) ? (
            <Link
              to={getUrl(getTotalPage(pagination) - 1)}
              className={styles.Item}
            >
              <Icon icon={lastPageIcon}/>
            </Link>
          ) : (
            <div className={cn(styles.Item, styles.DisabledItem)}>
              <Icon icon={lastPageIcon}/>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Pagination;
