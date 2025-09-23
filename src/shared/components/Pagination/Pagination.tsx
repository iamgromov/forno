import type { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  onChangePage,
}): ReactElement => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel='...'
      previousLabel='<'
      nextLabel='>'
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
