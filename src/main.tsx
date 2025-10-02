import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './shared/store/store';
import App from './app/App';

const basename = (() => {
  if (window.location.hostname.includes('vercel')) {
    // Vercel
    return '/';
  }

  return '/forno';
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
