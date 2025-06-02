import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './fonts.css';
import './colors.css';
import { AuthProvider } from './AuthContext';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </AuthProvider>
  </React.StrictMode>
);