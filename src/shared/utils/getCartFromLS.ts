import { calcTotalPrice } from './calcTotalPrice';

import type { ICartItem } from '../types';

export const getCardFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    totalPrice,
    items: items as ICartItem[],
  };
};
