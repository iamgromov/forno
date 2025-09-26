import axios from 'axios';
import { useEffect, useState, type FC, type ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../shared/api/config';
import type { PizzaItem } from '../../shared/types/product.interface';

const Product: FC = (): ReactElement => {
  const [product, setProduct] = useState<PizzaItem>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [id]);

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
        <h2>Загрузка..</h2>
      )}
    </div>
  );
};

export default Product;
