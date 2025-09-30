import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios, { type AxiosResponse } from 'axios';

import { STATUS, type IProduct, type ProductsState } from '../../types/product.interface';
import type { FetchParams } from '../../types/api.interface';
import { API_URL } from '../../api/config';

export const fetchProducts = createAsyncThunk<IProduct[], FetchParams, { rejectValue: unknown }>(
  'products/fetchProducts',
  async (params) => {
    const { currentPage, limit, category, sortBy, order, search } = params;
    const response: AxiosResponse<IProduct[]> = await axios.get(
      `${API_URL}?page=${currentPage}&limit=${limit}&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return response.data;
  }
);

const initialState: ProductsState = {
  status: STATUS.LOADING,
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = STATUS.LOADING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = STATUS.ERROR;
      state.products = [];
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
