import { memo, type FC, type ReactElement } from 'react';

import { CATEGORIES } from '../../constants';

import type { CategoriesProps } from '../../types';

export const Categories: FC<CategoriesProps> = memo(
  ({ categoryId, onChangeCategory }): ReactElement => {
    return (
      <div className='categories'>
        <ul>
          {CATEGORIES.map((elem, index) => {
            return (
              <li
                key={elem}
                onClick={() => onChangeCategory(index)}
                className={categoryId === index ? 'active' : ''}
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
