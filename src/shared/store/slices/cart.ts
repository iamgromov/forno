import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CartState, ICartItem } from '../../types/cart.interface';

const initialState: CartState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((obj) => obj.id == action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeProduct: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((obj) => obj.id == action.payload.id);

      if (findItem && findItem.count > 1) {
        state.totalPrice = state.totalPrice - findItem.price;
        findItem.count--;
      }
    },
    removeAllSimilarProducts: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id == action.payload);

      if (findItem) {
        state.totalPrice = state.totalPrice - findItem.price * findItem.count;
      }

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, removeAllSimilarProducts, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
