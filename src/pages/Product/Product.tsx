import { useEffect, useState, type FC, type ReactElement } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../shared/api/config';
import type { IProduct } from '../../shared/types/product.interface';
import { Loader } from '../../shared/ui';

const Product: FC = (): ReactElement => {
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
    <div className='container'>
      <Link to='/' className='button button--outline'>
        <span>Вернуться назад</span>
      </Link>
      <img src={product.imageUrl} alt='' />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h4>{product.price} ₽</h4>
    </div>
  );
};

export default Product;
