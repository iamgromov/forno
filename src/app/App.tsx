import { lazy, type FC, type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../shared/layouts/MainLayout';
import { LazyLoader } from '../shared/ui';
import { Home } from '../pages';

import '../scss/app.scss';

const Cart = lazy(() => import('../pages').then((module) => ({ default: module.Cart })));
const Product = lazy(() => import('../pages').then((module) => ({ default: module.Product })));
const NotFound = lazy(() => import('../pages').then((module) => ({ default: module.NotFound })));

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route
          path='/product/:id'
          element={
            <LazyLoader>
              <Product />
            </LazyLoader>
          }
        />
        <Route
          path='/cart'
          element={
            <LazyLoader>
              <Cart />
            </LazyLoader>
          }
        />
        <Route
          path='*'
          element={
            <LazyLoader>
              <NotFound />
            </LazyLoader>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
