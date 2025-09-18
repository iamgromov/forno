import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router
      basename='/forno'
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </Router>
  </StrictMode>
);
