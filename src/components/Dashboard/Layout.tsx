import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from "../Footer/Footer";
import './Layout.css';

const Layout: React.FC = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname);

  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Outlet />
        <Footer /> {/* Footer moved outside main-content */}

      </main>
    </div>
  );
};

export default Layout;
