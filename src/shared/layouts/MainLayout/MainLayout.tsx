import { type FC, type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'shared/components';

import styles from './MainLayout.module.scss';

export const MainLayout: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
