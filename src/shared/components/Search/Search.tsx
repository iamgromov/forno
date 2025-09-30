import { useCallback, useRef, useState, type ChangeEvent, type FC, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../store/slices/filter';

import styles from './Search.module.scss';

const Search: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = (): void => {
    setValue('');
    dispatch(setSearchValue(''));

    inputRef?.current?.focus();
  };

  const debounceRef = useRef(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 400)
  );

  const updateSearchValue = useCallback((str: string) => debounceRef.current(str), []);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        fill='none'
        height='24'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='11' cy='11' r='8' />
        <line x1='21' x2='16.65' y1='21' y2='16.65' />
      </svg>

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder='Поиск..'
        className={styles.input}
      />

      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clear__icon}
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
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
