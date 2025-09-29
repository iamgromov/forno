import { type FC, type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';

const MainLayout: FC = (): ReactElement => {
  return (
    <div className='wrapper'>
      <Header />

      <div className='content'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
