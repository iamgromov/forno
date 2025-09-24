import {
  useContext,
  useEffect,
  useRef,
  useState,
  type FC,
  type ReactElement,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';

import type { PizzaItem } from '../../shared/types/pizzas.interface';
import { getItems } from '../../shared/api/api';
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../../shared/store/slices/filter';
import { Card, Categories, Pagination, Sort } from '../../shared/components';
import { CardSkeleton } from '../../shared/ui';
import { SearchContext } from '../../app/App';
import { useNavigate } from 'react-router-dom';
import { sortList } from '../../shared/services/sortList';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { categoryId, currentPage, sortType } = useSelector(
    (state) => state.filter
  );
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [items, setItems] = useState<PizzaItem[]>([]);
  const { searchValue } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType, searchValue, currentPage, navigate]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortType = sortList.find(
        (item) => item.sortProperty === params.sortProperty
      );

      dispatch(setFilters({ ...params, sortType }));

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      setIsLoading(true);
      getItems(categoryId, sortType, searchValue, currentPage)
        .then((data: PizzaItem[]) => {
          setItems(data);
          setIsLoading(false);
        })
        .catch((err: unknown) => {
          console.error(err);
        });
    }

    isSearch.current = false;
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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
