import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
      <br />
      <Link to='/' className='button button--black'>
        <span>На главную</span>
      </Link>
    </div>
  );
};
