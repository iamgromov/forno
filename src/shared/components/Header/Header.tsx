import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartIcon, Logo } from '../../../assets/icons';
import { Search } from '../';

const Header: FC = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <Logo />
        </Link>

        <Search />

        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            <span className='button__price'>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <CartIcon />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
