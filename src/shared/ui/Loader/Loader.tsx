import { type FC, type ReactElement } from 'react';

import loader from 'assets/img/loader.svg';
import styles from './Loader.module.scss';

export const Loader: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <img className={styles.loader} src={loader} alt='loader' />
    </div>
  );
};
