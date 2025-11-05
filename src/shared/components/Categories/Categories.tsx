import { memo, type FC, type ReactElement } from 'react';

import cn from 'classnames';

import styles from './Categories.module.scss';
import { CATEGORIES } from '../../constants';

import type { CategoriesProps } from '../../types';

export const Categories: FC<CategoriesProps> = memo(
  ({ categoryId, onChangeCategory }): ReactElement => {
    return (
      <div className={styles.categories}>
        <ul>
          {CATEGORIES.map((elem, index) => {
            return (
              <li
                key={elem}
                onClick={() => onChangeCategory(index)}
                className={cn({ [styles.active]: categoryId === index })}
              >
                {elem}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
