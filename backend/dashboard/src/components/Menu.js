import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const username = localStorage.getItem("username") || "USERID";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "https://zerodha-clone-m4dl.vercel.app/login";
  };

  const menuItems = [
    { label: "Dashboard", path: "/" },
    { label: "Orders",    path: "/orders" },
    { label: "Holdings",  path: "/holdings" },
    { label: "Positions", path: "/positions" },
    { label: "Funds",     path: "/funds" },
    { label: "Apps",      path: "/apps" },
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
                <Link
                  to={path}
                  className={`menu-link ${isActive ? "menu-link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Profile + Dropdown */}
        <div className="menu-profile-wrap" ref={dropdownRef}>
          <div
            className="menu-profile"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <div className="menu-avatar">
              {username.slice(0, 2).toUpperCase()}
            </div>
            <span className="menu-username">{username}</span>
            <svg
              className={`menu-chevron ${isProfileDropdownOpen ? "open" : ""}`}
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Dropdown */}
          {isProfileDropdownOpen && (
            <div className="menu-dropdown">
              <div className="menu-dropdown__header">
                <div className="menu-dropdown__avatar">
                  {username.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="menu-dropdown__name">{username}</p>
                  <p className="menu-dropdown__sub">Active session</p>
                </div>
              </div>

              <div className="menu-dropdown__divider" />

              <button className="menu-dropdown__item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Profile settings
              </button>

              <button className="menu-dropdown__item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
                Settings
              </button>

              <div className="menu-dropdown__divider" />

              <button className="menu-dropdown__item menu-dropdown__item--danger" onClick={handleLogout}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;