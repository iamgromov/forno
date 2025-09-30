import type { ICartItem } from '../types/cart.interface';

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
