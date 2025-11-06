import { useEffect, useState, type FC, type ReactElement } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import style from './Product.module.scss';
import { API_URL } from '../../shared/api/config';
import { Loader } from '../../shared/ui';
import { formatRubles } from '../../shared/utils';

import type { IProduct } from '../../shared/types';

export const Product: FC = (): ReactElement => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    }

    fetchProduct();
  }, [id, navigate]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className={style.product}>
      <Link to='/' className={style.button}>
        <span>Вернуться назад</span>
      </Link>
      <img src={product.imageUrl} alt='' />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>{formatRubles(product.price)}</h4>
    </div>
  );
};
