import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    ["/signup", "Signup"],
    ["/login", "Login"],
    ["/about", "About"],
    ["/product", "Product"],
    ["/pricing", "Pricing"],
    ["/support", "Support"],
  ];

  return (
    <nav className={`zp-navbar ${scrolled ? "zp-navbar--scrolled" : ""}`}>
      <div className="zp-navbar__inner">
        <Link to="/" className="zp-navbar__brand">
          <img src="media/images/logo.svg" alt="Zerodha" className="zp-navbar__logo" />
        </Link>

        {/* Desktop nav */}
        <ul className="zp-navbar__links">
          {navLinks.map(([path, label]) => (
            <li key={path}>
              <Link
                to={path}
                className={`zp-nav-link 
                  ${isActive(path) ? "zp-nav-link--active" : ""} 
                  ${path === "/login" ? "zp-nav-link--cta" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`zp-navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="zp-navbar__drawer">
          {navLinks.map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`zp-drawer-link ${isActive(path) ? "zp-drawer-link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;