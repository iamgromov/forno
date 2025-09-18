import { Route, Routes } from 'react-router-dom';
import Header from '../shared/components/Header';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../scss/app.scss';
import Cart from '../pages/Cart';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
