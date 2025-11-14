import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <h2>
        Ничего не найдено <span>😔</span>
      </h2>
      <p className={styles.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
      <br />
      <Link to='/' className={styles.button}>
        <span>На главную</span>
      </Link>
    </div>
  );
};
