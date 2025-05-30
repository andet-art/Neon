import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Dashboard/Layout";
import Home from "./components/Dashboard/Home";  // <-- Import Home here
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Offers from "./components/Offers/Offers";
import Neotel from "./components/Neotel/Neotel";
import SignIn from "./components/SignIn";

const offersData = [
  // your offers here
];

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Home />} /> {/* <-- Home as index */}
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="offers" element={<Offers offers={offersData} />} />
        <Route path="neotel" element={<Neotel />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default App;
