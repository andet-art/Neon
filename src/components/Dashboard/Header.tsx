import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

import { images } from '../../assets/images';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
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
    setMenuOpen(false); // Close menu on logout (mobile)
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

  // Close menu on navigation
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent scroll when menu is open (mobile)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to={isAuthenticated ? '/dashboard/home' : '/'}>
          <img
            src={images.logo}
            alt="Neon Logo"
            onError={handleImageError}
          />
        </NavLink>
      </div>

      {/* Hamburger menu button */}
      <button
        className="menu-icon"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(m => !m)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={'nav' + (menuOpen ? ' open' : '')}>

        {/* Always show these navigation links */}
        <NavLink to="/dashboard/home" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to="/dashboard/about" className={isActiveLink} onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to="/dashboard/categories" className={isActiveLink} onClick={handleLinkClick}>
          Categories
        </NavLink>
        <NavLink to="/dashboard/service" className={isActiveLink} onClick={handleLinkClick}>
          Service
        </NavLink>
        <NavLink to="/dashboard/contact" className={isActiveLink} onClick={handleLinkClick}>
          Contact
        </NavLink>
        <NavLink to="/dashboard/shop" className={isActiveLink} onClick={handleLinkClick}>
          Shop
        </NavLink>
        <NavLink to="/dashboard/neotel" className={isActiveLink} onClick={handleLinkClick}>
          Neotel
        </NavLink>

        {/* Show Dashboard link and Logout button only when authenticated */}
        {isAuthenticated && (
          <>
            <NavLink to="/dashboard/offers" className={isActiveLink} onClick={handleLinkClick}>
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

export default Header;