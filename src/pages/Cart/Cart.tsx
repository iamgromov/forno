import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { BackIcon, BasketIcon, CartIcon } from '../../assets/icons';
import { CartItem } from '../../shared/components';
import { clearCart } from '../../shared/store/slices/cart';

const Cart: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className='container container--cart'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='content__title'>
            <CartIcon />
            Корзина
          </h2>
          <div className='cart__clear' onClick={onClickClear}>
            <BasketIcon />

            <span>Очистить корзину</span>
          </div>
        </div>
        <div className='content__items'>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              {' '}
              Всего пицц: <b>{totalCount} шт.</b>{' '}
            </span>
            <span>
              {' '}
              Сумма заказа: <b>{totalPrice} ₽</b>{' '}
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link to='/' className='button button--outline button--add go-back-btn'>
              <BackIcon />

              <span>Вернуться назад</span>
            </Link>
            <div className='button pay-btn'>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
