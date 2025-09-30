import { useEffect, useRef, type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Search } from '../';
import { selectors } from '../../store/selectors';
import { CartIcon, Logo } from '../../../assets/icons';

const Header: FC = () => {
  const { items, totalPrice } = useSelector(selectors.cartSelector);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);

      localStorage.setItem('cart', json);
      console.log(json);
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

export default Header;
