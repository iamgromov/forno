import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filter';
import cart from './slices/cart';
import products from './slices/products';

export const store = configureStore({
  reducer: { cart, filter, products },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
