import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  categoryId: number;
  sortType: {
    title: string;
    sortProperty: string;
  };
}

const initialState: IFilterState = {
  categoryId: 0,
  sortType: {
    title: 'популярности',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortType: (
      state,
      action: PayloadAction<{ title: string; sortProperty: string }>
    ) => {
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
