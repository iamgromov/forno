import type { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { useSelector } from 'react-redux';
import { selectors } from '../../store/selectors';

interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

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
      pageCount={5}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
