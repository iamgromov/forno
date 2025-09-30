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

type StatusType = 'LOADING' | 'SUCCESS' | 'ERROR';

export const STATUS: Record<StatusType, StatusType> = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export interface ProductsState {
  products: IProduct[];
  status: keyof typeof STATUS;
}
