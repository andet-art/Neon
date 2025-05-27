import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from "../Footer/Footer";
 // ✅ Import Footer
import './Layout.css';

const Layout: React.FC = () => {
  const location = useLocation();
  console.log('Current location:', location.pathname);

  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer /> {/* ✅ Footer moved outside main-content */}
    </div>
  );
};

export default Layout;
