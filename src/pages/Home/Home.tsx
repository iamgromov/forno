import { useEffect, useState, type FC, type ReactElement } from 'react';

import type { IPizzaItem } from '../../shared/types/pizzas.interface';
import { getItems } from '../../shared/api/api';
import { Card, Categories, Pagination, Sort } from '../../shared/components';
import { CardSkeleton } from '../../shared/ui';

const Home: FC = ({ searchValue }): ReactElement => {
  const [items, setItems] = useState<IPizzaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    title: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);
    getItems(categoryId, sortType, searchValue, currentPage)
      .then((data: IPizzaItem[]) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        console.error(err);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <>
      <div className='content__top'>
        <Categories
          categoryId={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort sortType={sortType} onChangeSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(4)].map((_, index) => <CardSkeleton key={index} />)
          : items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
