import type { FC, ReactElement } from 'react';

import { Button } from 'shared/ui';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        Ничего не&nbsp;найдено <span>😔</span>
      </h2>

      <p className={styles.description}>
        К&nbsp;сожалению, данная страница отсутствует в&nbsp;нашем&nbsp;магазине
      </p>

      <Button to='/' variant='secondary' title='На&nbsp;главную' />
    </div>
  );
};
