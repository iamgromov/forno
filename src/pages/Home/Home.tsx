import { useEffect, useState, type FC, type ReactElement } from 'react';
import type { IPizzaItem } from '../../shared/types/pizzas.interface';
import { getItems } from '../../shared/api/api';
import { Card, Categories, Sort } from '../../shared/components';
import { CardSkeleton } from '../../shared/ui';

const Home: FC = (): ReactElement => {
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

    window.scrollTo(0, 0);
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
              return <Card key={item.id} {...item} />;
            })}
      </div>
    </>
  );
};

export default Home;
