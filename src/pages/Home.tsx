import { useEffect, useState } from 'react';
import type { IPizzaItem } from '../shared/types/pizzas.interface';
import { getItems } from '../shared/api/api';
import Categories from '../shared/components/Categories';
import Sort from '../shared/components/Sort';
import CardSkeleton from '../shared/ui/CardSkeleton';
import Card from '../shared/components/Card';

const Home = () => {
  const [items, setItems] = useState<IPizzaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems()
      .then((data: IPizzaItem[]) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(4)].map((_, index) => <CardSkeleton key={index} />)
          : items.map((item) => {
              return (
                <Card
                  key={item.id}
                  {...item}
                />
              );
            })}
      </div>
    </>
  );
};

export default Home;
