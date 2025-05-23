import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
    { name: "Shop", path: "/shop" },
    { name: "Cart", path: "/cart" },
    
  ];

  return (
    <div className="sidebar">
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
    </div>
  );
};

export default Sidebar;
