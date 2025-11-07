import type { ICartItem } from 'shared/types';
import { calcTotalPrice } from 'shared/utils';

export const getCardFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    totalPrice,
    items: items as ICartItem[],
  };
};
