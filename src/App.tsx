import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import DashboardHome from "./components/Dashboard/DashboardHome";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Offers from "./components/Offers/Offers";
import Neotel from "./components/Neotel/Neotel";
import SignIn from "./components/SignIn";

// Sample offers data
const offersData = [
  {
    id: 1,
    title: "Fiber 50",
    contractTerm: "Договор на 2 години",
    promoText: "ПРОМО",
    priceOld: "890 ден.",
    priceNew: "0 ден.",
    features: [
      "До 50 Mbps / 50 Mbps",
      "Неограничен интернет",
      "Вклучен WiFi рутер",
    ],
    buttonText: "Нарачај веднаш",
  },
  // Add more offers as needed
];

const App: React.FC = () => {
  return (
    <Routes>
      {/* Redirect from root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* ✅ SignIn route should be top-level */}
      <Route path="/signin" element={<SignIn />} />

      {/* ✅ Dashboard layout with nested routes */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DashboardHome />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="offers" element={<Offers offers={offersData} />} />
        <Route path="neotel" element={<Neotel />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default App;
