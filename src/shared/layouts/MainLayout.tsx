import { type FC, type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';

export const MainLayout: FC = (): ReactElement => {
  return (
    <div className='wrapper'>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
