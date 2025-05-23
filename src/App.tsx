import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: 220, padding: 20 }}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/categories" element={<h1>Categories</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/service" element={<h1>Service</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/shop" element={<h1>Shop</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
