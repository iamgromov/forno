import { useState, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import type { IProduct } from '../../types/product.interface';
import type { ICartItem } from '../../types/cart.interface';
import { addProduct } from '../../store/slices/cart';
import { selectors } from '../../store/selectors';
import { PRODUCT_SIZES, PRODUCT_TYPES } from '../../constants';
import { PlusIcon } from '../../../assets/icons';

const Card: FC<IProduct> = ({ id, imageUrl, title, description, types, sizes, price }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectors.cartItemByIdSelector(id));

  const [activeType, setActiveType] = useState(0);
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
      size: PRODUCT_SIZES[activeSize],
    };

    dispatch(addProduct(item));
  };

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <Link to={`/product/${id}`}>
          <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
          <h4 className='pizza-block__title'>{title}</h4>
          <p className='pizza-block__description'>{description}</p>
        </Link>
        <div className='pizza-block__selector'>
          <ul>
            {types.map((typeId) => {
              return (
                <li
                  key={typeId}
                  className={activeType === typeId ? 'active' : ''}
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
                  className={activeSize === index ? 'active' : ''}
                  onClick={() => setActiveSize(index)}
                >
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
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

export default Card;
