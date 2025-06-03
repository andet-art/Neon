/* -------------------------------------------
   Base Tokens (Lighter Color Scheme)
-------------------------------------------- */
:root {
  --bg-lightest: #f8f9fa;
  --bg-lighter: #ffffff;
  --primary-blue: #3f51b5;
  --primary-blue-hover: #5c6bc0;
  --text-dark: #1a1a2e;
  --text-muted: #6c757d;
  --border-light: rgba(0, 0, 0, 0.08);
  --transition-speed: 0.3s ease;
  --btn-radius: 6px;
  --drawer-bg: #ffffff;
}

/* -------------------------------------------
   AppBar / Toolbar
-------------------------------------------- */
.appbar-light {
  background-color: var(--bg-lighter) !important;
  color: var(--text-dark) !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
  border-bottom: 1px solid var(--border-light) !important;
  min-height: 80px;
}

.toolbar-light {
  min-height: 80px !important;
  display: flex;
  align-items: center;
  padding: 0 1.5rem !important;
}

/* -------------------------------------------
   Logo
-------------------------------------------- */
.logo-container {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}

.logo-image {
  height: 60px;
  transition: transform var(--transition-speed);
}

.logo-image:hover {
  transform: scale(1.05);
}

/* -------------------------------------------
   Desktop Navigation Links
-------------------------------------------- */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-btn-light {
  text-transform: none !important;
  color: var(--text-dark) !important;
  background: transparent !important;
  border: 1px solid transparent !important;
  border-radius: var(--btn-radius) !important;
  font-weight: 500 !important;
  padding: 0.5rem 1rem !important;
  transition:
    background-color var(--transition-speed),
    color var(--transition-speed),
    box-shadow var(--transition-speed),
    border-color var(--transition-speed);
  position: relative;
}

.nav-btn-light::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--primary-blue);
  border-radius: var(--btn-radius);
  transition: all var(--transition-speed);
}

.nav-btn-light:hover {
  background-color: var(--bg-lightest) !important;
  color: var(--primary-blue) !important;
  border-color: var(--primary-blue-hover) !important;
  box-shadow: 0 2px 5px rgba(63, 81, 181, 0.2) !important;
  transform: translateY(-2px);
}

.nav-btn-light:hover::before {
  left: 0;
  width: 100%;
}

.nav-btn-active {
  background-color: var(--primary-blue) !important;
  color: var(--bg-lighter) !important;
  border-color: var(--primary-blue) !important;
  box-shadow: 0 2px 8px rgba(63, 81, 181, 0.3) !important;
}

.nav-btn-active::before {
  left: 0;
  width: 100%;
}

/* -------------------------------------------
   User Actions (Icons)
-------------------------------------------- */
.user-actions-light {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn-light {
  background: transparent !important;
  border: none !important;
  color: var(--text-dark) !important;
  transition: background-color var(--transition-speed), transform var(--transition-speed);
  position: relative;
}

.icon-btn-light:hover {
  background-color: var(--bg-lightest) !important;
  transform: scale(1.1);
  border-radius: var(--btn-radius);
}

.avatar-light {
  background-color: var(--primary-blue) !important;
  color: var(--bg-lighter) !important;
  width: 32px !important;
  height: 32px !important;
}

/* -------------------------------------------
   Mobile Menu Button (Hamburger)
-------------------------------------------- */
.mobile-menu-btn {
  display: none !important;
  color: var(--text-dark) !important;
  transition: transform var(--transition-speed);
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
  background-color: var(--bg-lightest) !important;
  border-radius: var(--btn-radius);
}

@media (max-width: 767px) {
  .desktop-nav {
    display: none !important;
  }
  .mobile-menu-btn {
    display: inline-flex !important;
  }
}

/* -------------------------------------------
   Drawer (Mobile)
-------------------------------------------- */
.drawer-light .MuiDrawer-paper {
  width: 240px !important;
  background-color: var(--drawer-bg) !important;
  border-right: 1px solid var(--border-light) !important;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1) !important;
  padding-top: 1rem;
}

.drawer-header-light {
  display: flex;
  align-items: center;
  padding: 0 1rem 1rem;
  border-bottom: 1px solid var(--border-light);
}

.drawer-logo {
  height: 60px;
  object-fit: contain;
  margin-left: -8px;
}

/* -------------------------------------------
   Drawer List Items
-------------------------------------------- */
.drawer-list-light {
  padding: 0;
}

.list-item-btn-light {
  position: relative;
  padding: 0.75rem 1rem !important;
  text-align: left;
  color: var(--text-dark) !important;
  transition: background-color var(--transition-speed), transform var(--transition-speed);
  border-radius: 0 !important;
}

.list-item-btn-light:hover {
  background-color: rgba(0, 0, 0, 0.04) !important;
  transform: translateX(5px);
}

.selected-light {
  background-color: rgba(63, 81, 181, 0.08) !important;
  border-left: 3px solid var(--primary-blue) !important;
}

.selected-light::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background-color: var(--primary-blue);
  opacity: 1;
}

.list-item-icon-light {
  color: var(--text-muted) !important;
  min-width: 32px !important;
}

.selected-icon-light {
  color: var(--primary-blue) !important;
}

/* -------------------------------------------
   Notifications Menu
-------------------------------------------- */
.menu-light .MuiPaper-root {
  background-color: var(--bg-lighter) !important;
  color: var(--text-dark) !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
}

.notifications-paper-light {
  width: 300px !important;
  max-height: 400px !important;
}

.notif-title-light {
  font-weight: 600;
  color: var(--text-dark) !important;
}

.notif-body-light {
  color: var(--text-muted) !important;
}

.view-all-light {
  width: 100%;
  text-align: center;
  color: var(--primary-blue) !important;
  font-weight: 600;
  transition: color var(--transition-speed);
}

.view-all-light:hover {
  color: var(--primary-blue-hover) !important;
}

/* -------------------------------------------
   Keyframe Animations (Slide In Drawer)
-------------------------------------------- */
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.drawer-light .MuiDrawer-paper {
  animation: slideIn var(--transition-speed);
}
