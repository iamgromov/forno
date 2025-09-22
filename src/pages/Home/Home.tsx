import {
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactElement,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { IPizzaItem } from '../../shared/types/pizzas.interface';
import { getItems } from '../../shared/api/api';
import { setCategoryId } from '../../shared/store/slices/filter';
import { Card, Categories, Pagination, Sort } from '../../shared/components';
import { CardSkeleton } from '../../shared/ui';
import { SearchContext } from '../../app/App';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { categoryId, sortType } = useSelector((state) => state.filter);

  const [items, setItems] = useState<IPizzaItem[]>([]);
  const { searchValue } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   title: 'популярности',
  //   sortProperty: 'rating',
  // });

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

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
          onChangeCategory={onChangeCategory}
        />
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
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
