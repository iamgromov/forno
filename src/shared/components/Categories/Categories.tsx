import { type FC, type ReactElement } from 'react';

import type { CategoriesProps } from '../../types/categories.interface';
import { CATEGORIES } from '../../constants';

const Categories: FC<CategoriesProps> = ({ categoryId, onChangeCategory }): ReactElement => {
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
};

export default Categories;
