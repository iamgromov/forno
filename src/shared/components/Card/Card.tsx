import { useState, type FC, type ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import styles from './Card.module.scss';
import { PlusIcon } from '../../../assets/icons';
import placeholder from '../../../assets/img/placeholder.svg';
import { PRODUCT_TYPES } from '../../constants';
import { selectors, addProduct } from '../../store';

import type { ICartItem, IProduct } from '../../types';

export const Card: FC<IProduct> = ({
  id,
  imageUrl,
  title,
  description,
  types,
  sizes,
  price,
}): ReactElement => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectors.cartItemByIdSelector(id));

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const count = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      count,
      price,
      imageUrl,
      title,
      type: PRODUCT_TYPES[activeType],
      size: sizes[activeSize],
    };

    dispatch(addProduct(item));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Link to={`/product/${id}`}>
          <img
            className={styles.image}
            src={imageUrl}
            alt={title}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = placeholder;
            }}
          />
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </Link>
        <div className={styles.selector}>
          <ul>
            {types.map((typeId) => {
              return (
                <li
                  key={typeId}
                  className={cn({ [styles.active]: activeType === typeId })}
                  onClick={() => setActiveType(typeId)}
                >
                  {PRODUCT_TYPES[typeId]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, index) => {
              return (
                <li
                  key={size}
                  className={cn({ [styles.active]: activeSize === index })}
                  onClick={() => setActiveSize(index)}
                >
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {price} ₽</div>
          <div onClick={onClickAdd} className='button button--outline button--add'>
            <PlusIcon />
            <span>Добавить</span>
            {count > 0 && <i>{count}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};
