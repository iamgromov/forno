export interface IProduct {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  types: number[];
  sizes: number[];
  category: number;
  rating: number;
}

export const STATUS = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
} as const;

export type StatusType = keyof typeof STATUS;

export interface ProductsState {
  products: IProduct[];
  status: keyof typeof STATUS;
}
