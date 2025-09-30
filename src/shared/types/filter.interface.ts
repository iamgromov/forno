export type SortProperty = 'rating' | '-rating' | 'price' | '-price' | 'title' | '-title';

export interface SortType {
  title: string;
  sortProperty: SortProperty;
}

export interface FilterState {
  categoryId: number;
  currentPage: number;
  limit: number;
  sortType: SortType;
  searchValue: string;
}
