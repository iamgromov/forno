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

export type Status = 'loading' | 'success' | 'error';

export interface ProductsState {
  products: IProduct[];
  status: Status;
}
