import type { ICartItem } from '../types/cart.interface';
import { calcTotalPrice } from './calcTotalPrice';

export const getCardFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    totalPrice,
    items: items as ICartItem[],
  };
};
