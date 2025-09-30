import { useEffect, useRef, type FC, type ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { selectors } from '../../shared/store/selectors';
import { setCategoryId, setCurrentPage, setFilters } from '../../shared/store/slices/filter';
import { fetchProducts } from '../../shared/store/slices/products';
import { Card, Categories, ErrorBlock, Pagination, Sort } from '../../shared/components';
import { CardSkeleton } from '../../shared/ui';
import { CATEGORIES, SORT_LIST } from '../../shared/constants';
import { STATUS } from '../../shared/types/product.interface';
import type { AppDispatch } from '../../shared/store/store';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { categoryId, limit, currentPage, sortType, searchValue } = useSelector(
    selectors.filterSelector
  );
  const { status, products } = useSelector(selectors.productsSelector);
  const navigate = useNavigate();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

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

      dispatch(setFilters({ ...params, sortType }));

      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    if (!isSearch.current) {
      dispatch(fetchProducts({ currentPage, limit, category, sortBy, order, search }));
    }

    isSearch.current = false;
  }, [categoryId, limit, sortType, searchValue, currentPage, dispatch]);

  return (
    <>
      <div className='content__top'>
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>{CATEGORIES[categoryId]} пиццы</h2>
      {status === STATUS.ERROR ? (
        <ErrorBlock />
      ) : (
        <>
          <div className='content__items'>
            {status === STATUS.LOADING
              ? [...new Array(limit)].map((_, index) => <CardSkeleton key={index} />)
              : products.map((product) => {
                  return <Card key={product.id} {...product} />;
                })}
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
      )}
    </>
  );
};

export default Home;
