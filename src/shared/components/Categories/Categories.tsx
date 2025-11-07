import { memo, type FC, type ReactElement } from 'react';
import cn from 'classnames';

import { CATEGORIES } from 'shared/constants';
import type { CategoriesProps } from 'shared/types';

import styles from './Categories.module.scss';

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
