import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from 'app/App';
import { store } from 'shared/store';

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
