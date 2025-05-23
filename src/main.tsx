import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// import About from './components/About/About.tsx';
// import Cart from './components/Cart/Cart.tsx';
// import Categories from './components/Categories/Categories.tsx';
// import Contact from './components/Contact/Contact.tsx';
// import DashboardHome from './components/Dashboard/DashboardHome.tsx';
// import Header from './components/Dashboard/Header.tsx';
// import Layout from './components/Dashboard/Layout.tsx';
// import Sidebar from './components/Dashboard/Sidebar.tsx';
// import Home from './components/Home/Home.tsx';
// import Language from './components/Language/Language.tsx'; // ✅ fixed spelling
// import Profile from './components/Profile/Profile.tsx';
// import Service from './components/Service/Service.tsx';
// import Shop from './components/Shop/Shop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
