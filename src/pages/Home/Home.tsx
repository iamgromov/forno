import { useCallback, useEffect, useRef, type FC, type ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { Card, Categories, ErrorBlock, Pagination, Sort } from 'shared/components';
import { CATEGORIES, SORT_LIST } from 'shared/constants';
import {
  selectors,
  setCategoryId,
  setCurrentPage,
  setFilters,
  fetchProducts,
  type AppDispatch,
} from 'shared/store';
import { STATUS } from 'shared/types';
import { CardSkeleton } from 'shared/ui';

import styles from './Home.module.scss';

export const Home: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { categoryId, limit, currentPage, sortDirection, sortType, searchValue } = useSelector(
    selectors.filterSelector
  );
  const { status, products } = useSelector(selectors.productsSelector);
  const navigate = useNavigate();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const onChangeCategory = useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch]
  );

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
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

      const sortType = SORT_LIST.find((item) => item.sortProperty === params.sortProperty);
      const sortDirection = 'asc';

      dispatch(setFilters({ ...params, sortDirection, sortType }));

      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sortBy = sortType.sortProperty;
    const order = sortDirection;
    const category = categoryId ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    if (!isSearch.current) {
      dispatch(fetchProducts({ currentPage, limit, category, sortBy, order, search }));
    }

    isSearch.current = false;
  }, [categoryId, limit, sortDirection, sortType, searchValue, currentPage, dispatch]);

  return (
    <div className={styles.content}>
      <div className={styles.filter}>
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sortDirection={sortDirection} sortType={sortType} />
      </div>

      <h2 className={styles.title}>{CATEGORIES[categoryId]} пиццы</h2>

      {status === STATUS.ERROR ? (
        <ErrorBlock />
      ) : (
        <>
          <div className={styles.items}>
            {status === STATUS.LOADING
              ? [...new Array(limit)].map((_, index) => <CardSkeleton key={index} />)
              : products.map((product) => {
                  return <Card key={product.id} {...product} />;
                })}
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
      )}
    </div>
  );
};
