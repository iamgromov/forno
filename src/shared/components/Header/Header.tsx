import { useEffect, useRef, type FC, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Search } from '../';
import { CartIcon, Logo } from '../../../assets/icons';
import { selectors } from '../../store';

export const Header: FC = (): ReactElement => {
  const { items, totalPrice } = useSelector(selectors.cartSelector);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);

      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/' className='header__logo'>
          <Logo />
        </Link>

        {location.pathname !== '/cart' && <Search />}

        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            {totalPrice ? (
              <>
                <span className='button__price'>{totalPrice} ₽</span>
                <div className='button__delimiter'></div>
              </>
            ) : null}
            <CartIcon />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
