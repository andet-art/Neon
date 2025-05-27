import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import DashboardHome from "./components/Dashboard/DashboardHome"; 
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
// import Cart from "./components/Cart/Cart"; // no longer needed if you don't use Cart
import Offers from "./components/Offers/Offers";  // import your Offers component
import Neotel from "./components/Neotel/Neotel";

// Add your offers data here
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
  // You can add more offers here
];

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
        {/* Pass the offersData as a prop here */}
        <Route path="offers" element={<Offers offers={offersData} />} />
        <Route path="neotel" element={<Neotel />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default App;
