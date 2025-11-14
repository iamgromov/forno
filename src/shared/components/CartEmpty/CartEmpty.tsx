import { type FC, type ReactElement } from 'react';

import { Button } from 'shared/ui';

import emptyCart from 'assets/img/empty-cart.png';
import styles from './CartEmpty.module.scss';

export const CartEmpty: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        Корзина пустая&nbsp;<span>😔</span>
      </h2>

      <p className={styles.description}>
        Вероятнее всего, вы&nbsp;ещё ничего не&nbsp;добавили. Для&nbsp;того, чтобы начать собирать
        заказ, перейдите на&nbsp;главную страницу
      </p>

      <img className={styles.image} src={emptyCart} alt='Пустая корзина' />

      <Button to='/' variant='secondary' title='К&nbsp;покупкам' />
    </div>
  );
};
