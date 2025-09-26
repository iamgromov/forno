import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartIcon, Logo } from '../../../assets/icons';
import { Search } from '../';
import { selectors } from '../../store/selectors';

const Header: FC = () => {
  const { items, totalPrice } = useSelector(selectors.cartSelector);
  const location = useLocation();

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/' className='header__logo'>
          <Logo />
        </Link>

        {location.pathname == '/cart' ? null : <Search />}

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
