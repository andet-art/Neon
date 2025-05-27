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
    <header>
      <div className="logo">
        <img
          src={images.logo}
          alt="Neon Logo"
          onError={handleImageError}
          onLoad={() => console.log('Logo loaded successfully')}
        />
        {/* Removed NavLink and brand-name completely */}
      </div>

      <nav>
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

      <div className="profile">
        <img
          src={images.slides.slide1}
          alt="Profile"
          className="profile-img"
          onError={handleImageError}
          onLoad={() => console.log('Profile image loaded successfully')}
        />
      </div>
    </header>
  );
};

export default Header;
