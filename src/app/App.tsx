import { Route, Routes } from 'react-router-dom';
import { Header } from '../shared/components';
import { Cart, Home, NotFound } from '../pages';
import '../scss/app.scss';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
