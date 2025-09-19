import type { FC, ReactElement } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination: FC = ({ onChangePage }): ReactElement => {
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
    />
  );
};

export default Pagination;
