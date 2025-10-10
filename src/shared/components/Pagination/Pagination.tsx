import type { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import styles from './Pagination.module.scss';
import { selectors } from '../../store';

import type { PaginationProps } from '../../types';

export const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }): ReactElement => {
  const { limit } = useSelector(selectors.filterSelector);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      previousLabel='<'
      nextLabel='>'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={limit}
      pageCount={4}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};
