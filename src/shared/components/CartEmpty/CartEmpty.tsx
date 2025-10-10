import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../../../assets/img/empty-cart.png';

export const CartEmpty: FC = (): ReactElement => {
  return (
    <div className='cart cart--empty'>
      <h2>
        Корзина пустая <span>😔</span>
      </h2>
      <p>
        Вероятнее всего, вы ещё не заказывали пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt='Empty cart' />
      <Link to='/' className='button button--black'>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
