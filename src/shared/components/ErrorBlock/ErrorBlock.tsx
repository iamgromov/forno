import { type FC, type ReactElement } from 'react';

import styles from './ErrorBlock.module.scss';

export const ErrorBlock: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        Произошла ошибка <span>😔</span>
      </h2>

      <p className={styles.description}>
        К&nbsp;сожалению, не&nbsp;удалось получить питсы.
        <br />
        Попробуйте повторить попытку позже.
      </p>
    </div>
  );
};
