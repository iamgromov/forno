import type { FC, ReactElement } from 'react';

import styles from './Search.module.scss';

const Search: FC = ({ searchValue, setSearchValue }): ReactElement => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        fill='none'
        height='24'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='11' cy='11' r='8' />
        <line x1='21' x2='16.65' y1='21' y2='16.65' />
      </svg>

      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder='Поиск..'
        className={styles.input}
      />

      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.clear__icon}
          fill='none'
          height='24'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line x1='0' x2='24' y1='0' y2='24' />
          <line x1='0' x2='24' y1='24' y2='0' />
        </svg>
      )}
    </div>
  );
};

export default Search;
