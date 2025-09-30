import type { IProduct } from './product.interface';

export interface ICartItem extends Pick<IProduct, 'id' | 'imageUrl' | 'title' | 'price'> {
  count: number;
  type: string;
  size: number;
}

export interface CartState {
  totalPrice: number;
  items: ICartItem[];
}
