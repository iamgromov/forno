import type { ICartItem } from 'shared/types';

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
