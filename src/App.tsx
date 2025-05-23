// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar";
import DashboardHome from "./components/Dashboard/DashboardHome";
import "./App.css";
import Categories from "./components/Categories/Categories";

const App: React.FC = () => {
  return (
    
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px", marginLeft: "220px" }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/about" element={<h1>About Us</h1>} />
            <Route path="/service" element={<h1>Service</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path="/shop" element={<h1>Shop</h1>} />
            <Route path="/cart" element={<h1>Cart</h1>} />
            <Route path="/offers" element={<h1>Offers</h1>} />
            {/* You can also add a default route or 404 page */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
