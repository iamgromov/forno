import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FilterState, SortType } from '../../types/filter.interface';

const initialState: FilterState = {
  categoryId: 0,
  currentPage: 1,
  limit: 8,
  sortType: {
    title: 'популярности',
    sortProperty: 'rating',
  },
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
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
      state.sortType = action.payload.sortType;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setCurrentPage, setSortType, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
