import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import Home from "./components/Dashboard/Home";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Offers from "./components/Offers/Offers";
import Neotel from "./components/Neotel/Neotel";
import SignIn from "./components/SignIn";
import WebPages from "./components/Service/WebPages";
import SoftwareMaintenance from "./components/Service/SoftwareMaintenance";
import Hardware from "./components/Service/Hardware";
import Other from "./components/Service/other";
import Orders from "./components/Orders/Orders";

const offersData = [
  // your offers here
];

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/signin" element={<SignIn />} />

      {/* ✅ Dashboard routes with Layout */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="software-maintenance" element={<SoftwareMaintenance />} />
        <Route path="webpages" element={<WebPages />} />
        <Route path="hardware-maintenance" element={<Hardware />} />
        <Route path="other" element={<Other />} />
        <Route path="shop" element={<Shop />} />
        <Route path="offers" element={<Offers offers={offersData} />} />
        <Route path="contact" element={<Contact />} /> {/* ✅ Moved inside dashboard */}
        <Route path="neotel" element={<Neotel />} />   {/* ✅ Moved inside dashboard */}
        <Route path="orders" element={<Orders />} />   {/* Optional: can stay here if triggered via dashboard */}
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default App;
