import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  categoryId: number;
  currentPage: number;
  sortType: {
    title: string;
    sortProperty: string;
  };
}

const initialState: IFilterState = {
  categoryId: 0,
  currentPage: 1,
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
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
    },
  },
});

export const { setCategoryId, setCurrentPage, setSortType, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
