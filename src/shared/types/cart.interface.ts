import type { IProduct } from './product.interface';

export type ICartItem = Omit<
  IProduct,
  'description' | 'types' | 'sizes' | 'category' | 'rating'
> & {
  count: number;
  type: string;
  size: number;
};

export interface CartState {
  totalPrice: number;
  items: ICartItem[];
}
