import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import DashboardHome from './components/Dashboard/DashboardHome';
import Header from './components/Dashboard/Header';
import Layout from './components/Dashboard/Layout';
import Sidebar from './components/Dashboard/Sidebar';
import Home from './components/Home/Home';
import Language from './components/Language/Language';
import Profile from './components/Profile/Profile';
import Service from './components/Service/Service';
import Shop from './components/Shop/Shop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
