import type { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainLayout from '../shared/layouts/MainLayout';
import { Cart, Home, NotFound, Product } from '../pages';

import '../scss/app.scss';

const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
