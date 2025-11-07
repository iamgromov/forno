import { type FC, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct, removeProduct, removeAllSimilarProducts } from 'shared/store';
import type { ICartItem } from 'shared/types';
import { formatRubles } from 'shared/utils';

import { AddIcon, ClearIcon, RemoveIcon } from 'assets/icons';
import styles from './CartItem.module.scss';

export const CartItem: FC<ICartItem> = ({
  id,
  count,
  price,
  imageUrl,
  title,
  type,
  size,
}): ReactElement => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    dispatch(
      addProduct({
        id,
        count,
        price,
        imageUrl,
        title,
        type,
        size,
      })
    );
  };

  const onClickRemove = () => {
    dispatch(
      removeProduct({
        id,
        count,
        price,
        imageUrl,
        title,
        type,
        size,
      })
    );
  };

  const onClickRemoveSimilar = () => {
    dispatch(removeAllSimilarProducts(id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={imageUrl} alt={title} />
      </div>

      <div className={styles.title}>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>

      <div className={styles.count}>
        <button className={styles.minus} disabled={count == 1} onClick={onClickRemove}>
          <RemoveIcon />
        </button>
        <b>{count}</b>
        <button className={styles.plus} onClick={onClickAdd}>
          <AddIcon />
        </button>
      </div>

      <div className={styles.price}>
        <b>{formatRubles(price * count)}</b>
      </div>

      <button className={styles.remove} onClick={onClickRemoveSimilar}>
        <ClearIcon />
      </button>
    </div>
  );
};
