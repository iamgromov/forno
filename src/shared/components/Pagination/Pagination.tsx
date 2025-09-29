import type { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import type { PaginationProps } from '../../types/pagination.interface';
import { selectors } from '../../store/selectors';

import styles from './Pagination.module.scss';

const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }): ReactElement => {
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

export default Pagination;
