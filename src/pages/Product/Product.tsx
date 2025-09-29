import { useEffect, useState, type FC, type ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../shared/api/config';
import type { IProduct } from '../../shared/types/product.interface';

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
    return <h2>Загрузка..</h2>;
  }

  return (
    <div className='container'>
      {product ? (
        <>
          <img src={product.imageUrl} alt='' />
          <h2>{product.title}</h2>
          <p>Description</p>
          <h4>{product.price}</h4>
        </>
      ) : (
        <h2>Загрузка..</h2> // TODO: Собрать скелетон для страницы продукта
      )}
    </div>
  );
};

export default Product;
