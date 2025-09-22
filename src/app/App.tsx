import { Route, Routes } from 'react-router-dom';
import { Header } from '../shared/components';
import { Cart, Home, NotFound } from '../pages';
import '../scss/app.scss';
import { createContext, useState } from 'react';

export const SearchContext = createContext('');

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
