import { type FC, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct, removeProduct, removeAllSimilarProducts } from '../../store/slices/cart';
import { AddIcon, RemoveIcon } from '../../../assets/icons';
import ClearIcon from '../../../assets/icons/ClearIcon';

const CartItem: FC = ({ id, count, price, imageUrl, title, type, size }): ReactElement => {
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
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt={title} />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          className='button button--outline button--circle cart__item-count-minus'
          onClick={onClickRemove}
        >
          <RemoveIcon />
        </div>
        <b>{count}</b>
        <div
          className='button button--outline button--circle cart__item-count-plus'
          onClick={onClickAdd}
        >
          <AddIcon />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{price * count} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <div className='button button--outline button--circle' onClick={onClickRemoveSimilar}>
          <ClearIcon />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
