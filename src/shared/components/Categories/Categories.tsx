import { useState, type FC } from 'react';

const Categories: FC = () => {
  const [category, setCategory] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className='categories'>
      <ul>
        {categories.map((elem, index) => {
          return (
            <li
              key={elem}
              onClick={() => setCategory(index)}
              className={category === index ? 'active' : ''}
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
