import type { SortType } from '../types/filter.interface';

export const CATEGORIES: string[] = [
  'Все',
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const PRODUCT_SIZES: number[] = [26, 30, 40];

export const PRODUCT_TYPES: string[] = ['тонкое', 'традиционное'];

export const SORT_LIST: SortType[] = [
  { title: 'популярности-', sortProperty: 'rating' },
  { title: 'популярности+', sortProperty: '-rating' },
  { title: 'цене-', sortProperty: 'price' },
  { title: 'цене+', sortProperty: '-price' },
  { title: 'алфавиту-', sortProperty: 'title' },
  { title: 'алфавиту+', sortProperty: '-title' },
];
