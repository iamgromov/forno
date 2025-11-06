import { type FC, type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';
import { Footer, Header } from '../../components';

export const MainLayout: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
