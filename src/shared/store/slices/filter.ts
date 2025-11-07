import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SLICE_NAMES } from 'shared/store/types';
import type { FilterState, SortDirection, SortType } from 'shared/types';

const initialState: FilterState = {
  categoryId: 0,
  currentPage: 1,
  limit: 8,
  sortDirection: 'asc',
  sortType: {
    title: 'популярности',
    sortProperty: 'rating',
  },
  searchValue: '',
};

export const filterSlice = createSlice({
  name: SLICE_NAMES.FILTER,
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sortDirection = action.payload.sortDirection;
      state.sortType = action.payload.sortType;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setCurrentPage,
  setSortDirection,
  setSortType,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
