import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import DashboardHome from "./components/Dashboard/DashboardHome";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Neotel from "./components/Neotel/Neotel";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardHome />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="neotel" element={<Neotel />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default App;
