import { type FC, type ReactElement } from 'react';

import styles from './Loader.module.scss';
import loader from '../../../assets/img/loader.svg';

export const Loader: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <img className={styles.loader} src={loader} alt='loader' />
    </div>
  );
};
