// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar";
import DashboardHome from "./components/Dashboard/DashboardHome";
import "./App.css";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Carts from "./components/Cart/Cart";
import Cart from "./components/Cart/Cart";
import Offers from "./components/Offers/Offers";

const App: React.FC = () => {
  return (
    
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px", marginLeft: "220px" }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<Offers/>} />
            {/* You can also add a default route or 404 page */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
