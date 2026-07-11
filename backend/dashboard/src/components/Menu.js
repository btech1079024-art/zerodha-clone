import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard",  path: "/" },
    { label: "Orders",     path: "/orders" },
    { label: "Holdings",   path: "/holdings" },
    { label: "Positions",  path: "/positions" },
    { label: "Funds",      path: "/funds" },
    { label: "Apps",       path: "/apps" },
  ];

  return (
    <div className="menu-container">
      <Link to="/">
        <img src="logo.png" alt="Logo" className="menu-logo" />
      </Link>

      <div className="menus">
        <ul className="menu-list">
          {menuItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link to={path} className={`menu-link ${isActive ? "menu-link--active" : ""}`}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="menu-profile" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
          <div className="menu-avatar">ZU</div>
          <span className="menu-username">USERID</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;