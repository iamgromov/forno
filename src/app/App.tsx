import { lazy, type FC, type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'app/app.scss';
import { Home } from 'pages';

import { MainLayout } from 'shared/layouts';
import { LazyLoader } from 'shared/ui';

const Cart = lazy(() => import('../pages').then((module) => ({ default: module.Cart })));
const Product = lazy(() => import('../pages').then((module) => ({ default: module.Product })));
const NotFoundPage = lazy(() =>
  import('../pages').then((module) => ({ default: module.NotFound }))
);

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
              <NotFoundPage />
            </LazyLoader>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
