import type { SortType, Links } from 'shared/types';

export const LINKS: Record<Links, string> = {
  REPO: 'https://github.com/iamgromov/forno',
  STUB: 'https://www.youtube.com/watch?v=K5zP7eQltDE',
  TELEGRAM: 'https://t.me/iamgromov',
};

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
  { title: 'популярности', sortProperty: 'rating' },
  { title: 'цене', sortProperty: 'price' },
  { title: 'алфавиту', sortProperty: 'title' },
];
