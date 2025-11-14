import type { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartEmpty, CartItem } from 'shared/components';
import { LINKS } from 'shared/constants';
import { clearCart, selectors } from 'shared/store';
import { Button } from 'shared/ui';
import { formatRubles } from 'shared/utils';

import { BackIcon, BasketIcon, CartIcon } from 'assets/icons';
import styles from './Cart.module.scss';

export const Cart: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectors.cartSelector);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    dispatch(clearCart());
  };

  if (!totalPrice) return <CartEmpty />;

  return (
    <div className={styles.cart}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2 className={styles.title}>
            <CartIcon />
            Корзина
          </h2>
          <div className={styles.clear} onClick={onClickClear}>
            <BasketIcon />
            <span>Очистить корзину</span>
          </div>
        </div>

        <div className={styles.items}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.details}>
            <span>
              {' '}
              Всего пицц: <b>{totalCount} шт.</b>{' '}
            </span>
            <span>
              {' '}
              Сумма заказа: <b>{formatRubles(totalPrice)}</b>{' '}
            </span>
          </div>
          <div className={styles.buttons}>
            <Button
              to='/'
              variant='secondary'
              title='Вернуться&nbsp;назад'
              leftIcon={<BackIcon />}
            />

            <Button href={LINKS.STUB} variant='primary' title='Оплатить&nbsp;сейчас' />
          </div>
        </div>
      </div>
    </div>
  );
};
