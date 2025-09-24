import type { RootState } from './store';

export const selectors = {
  cartSelector: (state: RootState) => state.cart,
  filterSelector: (state: RootState) => state.filter,
  productsSelector: (state: RootState) => state.products,

  cartItemByIdSelector: (id: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id == id),

  sortTypeSelector: (state: RootState) => state.filter.sortType,
};
