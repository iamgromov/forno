import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
import cart from './slices/cart';

export const store = configureStore({
  reducer: { cart, filter },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
