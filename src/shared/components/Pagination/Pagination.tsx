import type { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import { selectors } from 'shared/store';
import type { PaginationProps } from 'shared/types';

import styles from './Pagination.module.scss';

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
