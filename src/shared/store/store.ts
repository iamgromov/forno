import { configureStore } from '@reduxjs/toolkit';

import cart from 'shared/store/slices/cart';
import filter from 'shared/store/slices/filter';
import products from 'shared/store/slices/products';

export const store = configureStore({
  reducer: { cart, filter, products },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
