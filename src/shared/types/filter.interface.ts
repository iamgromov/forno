export interface SortItem {
  title: string;
  sortProperty: string;
}

export interface FilterState {
  categoryId: number;
  currentPage: number;
  limit: number;
  sortType: SortItem;
  searchValue: string;
}
