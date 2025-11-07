import { memo, useEffect, useRef, useState, type FC, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { SORT_LIST } from 'shared/constants';
import { setSortDirection, setSortType } from 'shared/store';
import type { SortType, SortProps } from 'shared/types';

import { ArrowUpIcon } from 'assets/icons';
import styles from './Sort.module.scss';

export const Sort: FC<SortProps> = memo(({ sortDirection, sortType }): ReactElement => {
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  const handleClickSortDirection = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';

    dispatch(setSortDirection(newDirection));
  };

  const handleClickSortType = (obj: SortType) => {
    dispatch(setSortType(obj));
    setVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();

      if (sortRef.current && !path.includes(sortRef.current)) {
        setVisible(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.label}>
        <button
          className={cn(styles.button, {
            [styles.flipped]: sortDirection === 'desc',
          })}
          onClick={() => handleClickSortDirection()}
        >
          <ArrowUpIcon />
        </button>

        <b>Сортировать по:</b>
        <span onClick={() => setVisible(!visible)}>{sortType.title}</span>
      </div>

      {visible && (
        <div className={styles.popup}>
          <ul>
            {SORT_LIST.map((obj) => {
              return (
                <li
                  key={obj.title}
                  onClick={() => handleClickSortType(obj)}
                  className={cn({ [styles.active]: sortType.sortProperty === obj.sortProperty })}
                >
                  {obj.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});
