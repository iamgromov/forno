import { type FC, type ReactElement } from 'react';

import styles from './ErrorBlock.module.scss';

export const ErrorBlock: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <h2>Произошла ошибка 😔</h2>
      <p>
        К сожалению, не удалось получить питсы.
        <br />
        Попробуйте повторить попытку позже.
      </p>
    </div>
  );
};
