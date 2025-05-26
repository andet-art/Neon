import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import './Layout.css';

const Layout: React.FC = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname); // Debug log

  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
