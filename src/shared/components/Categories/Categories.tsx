import { type FC } from 'react';

import { CATEGORIES } from '../../constants';

const Categories: FC = ({ categoryId, onChangeCategory }) => {
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
