import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PizzaItem } from '../../types/product.interface';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { API_URL } from '../../api/config';

export type Status = 'loading' | 'success' | 'error';

export interface ProductsState {
  products: PizzaItem[];
  status: Status;
}

export type FetchParams = {
  currentPage: number;
  category?: number;
  sortBy?: string;
  order?: string;
  search?: string;
};

export const fetchProducts = createAsyncThunk<PizzaItem[], FetchParams, { rejectValue: unknown }>(
  'products/fetchProducts',
  async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const response: AxiosResponse<PizzaItem[]> = await axios.get(
      `${API_URL}?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return response.data;
  }
);

const initialState: ProductsState = {
  status: 'loading',
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<PizzaItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'error';
      state.products = [];
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
