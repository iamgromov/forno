export type SortDirection = 'asc' | 'desc';
export type SortProperty = 'rating' | 'price' | 'title';

export interface SortType {
  title: string;
  sortProperty: SortProperty;
}

export interface FilterState {
  categoryId: number;
  currentPage: number;
  limit: number;
  sortDirection: SortDirection;
  sortType: SortType;
  searchValue: string;
}
