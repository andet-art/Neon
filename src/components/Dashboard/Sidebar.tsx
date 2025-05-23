// src/components/Dashboard/Sidebar.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // optional, for custom styles

const Sidebar: React.FC = () => {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
    { name: "Offers", path: "/offers" },
  ];

  return (
    <aside className="sidebar">
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
