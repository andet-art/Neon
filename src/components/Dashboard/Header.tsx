// src/components/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { images } from '../../assets/images';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  // Utility for NavLink styling
  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-btn active' : 'nav-btn';

  // Fallback image if logo fails
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/vite.svg';
  };

  // On mount, check auth status
  useEffect(() => {
    fetch('/api/checkAuth.php', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(!!data.isAuthenticated);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  // Logout handler
  const handleLogout = () => {
    fetch('/api/signout.php', {
      method: 'POST',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(() => {
        setIsAuthenticated(false);
        navigate('/');
      })
      .catch(() => {
        navigate('/');
      });
  };

  // Toggle nav visibility
  const toggleNav = () => {
    setNavVisible(prev => !prev);
  };

  return (
    <header>
      <div className="logo">
        <NavLink to={isAuthenticated ? '/dashboard/home' : '/'}>
          <img src={images.logo} alt="Neon Logo" onError={handleImageError} />
        </NavLink>
      </div>

      {/* Hamburger button */}
      <button
        className={`menu-btn${navVisible ? ' open' : ''}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span />
      </button>

      {/* Always render nav; CSS will show/hide based on .open */}
      <nav className={navVisible ? 'open' : ''}>
        <NavLink to="/dashboard/home" className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to="/dashboard/about" className={isActiveLink}>
          About
        </NavLink>
        <NavLink to="/dashboard/categories" className={isActiveLink}>
          Categories
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
        <NavLink to="/dashboard/neotel" className={isActiveLink}>
          Neotel
        </NavLink>

        {isAuthenticated && (
          <>
            <NavLink to="/dashboard/offers" className={isActiveLink}>
              Dashboard
            </NavLink>
            <button onClick={handleLogout} className="nav-btn logout-btn">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
