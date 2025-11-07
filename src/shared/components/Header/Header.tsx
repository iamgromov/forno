import { useEffect, useRef, type FC, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Search } from 'shared/components';
import { selectors } from 'shared/store';
import { formatRubles } from 'shared/utils';

import { CartIcon, Logo } from 'assets/icons';
import styles from './Header.module.scss';

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
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/' className={styles.logo}>
          <Logo />
        </Link>

        {location.pathname !== '/cart' && (
          <div className={styles.buttons}>
            <Search />

            <Link to='/cart' className={styles.cart}>
              {totalPrice ? (
                <>
                  <span className={styles.price}>{formatRubles(totalPrice)}</span>
                  <span className={styles.delimiter}></span>
                </>
              ) : null}
              <CartIcon />
              <span>{totalCount}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
