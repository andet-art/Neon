import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { images } from '../../assets/images';

const Header: React.FC = () => {
  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-btn active' : 'nav-btn';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image failed to load:', e.currentTarget.src);
    e.currentTarget.src = '/vite.svg'; // fallback image
  };

  return (
    <header style={{ justifyContent: 'space-between' }}>
      <div className="logo">
        <NavLink to="/dashboard/home">
          <img src={images.logo} alt="Neon Logo" onError={handleImageError} />
        </NavLink>
      </div>

      <nav style={{ marginLeft: 'auto', justifyContent: 'flex-end' }}>
        <NavLink to="/dashboard/categories" className={isActiveLink}>
          Categories
        </NavLink>
        <NavLink to="/dashboard/about" className={isActiveLink}>
          About
        </NavLink>
        <NavLink to="/dashboard/service" className={isActiveLink}>
          Service
        </NavLink>
        <NavLink to="/dashboard/contact" className={isActiveLink}>
          Contact
        </NavLink>
        <NavLink to="/dashboard/shop" className={isActiveLink}>
          Shop
        </NavLink>
        <NavLink to="/dashboard/offers" className={isActiveLink}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/neotel" className={isActiveLink}>
          Neotel
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
