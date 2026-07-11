import React, { useState } from "react";
import "./Apps.css";

const ecosystemApps = [
  {
    name: "Streak",
    logo: "/streak-logo.png",
    tagline: "Algo & Systematic Trading",
    description: "Create, backtest, and deploy trading strategies live in the market without writing a single line of code.",
    link: "#",
    badge: "Popular",
    badgeColor: "#387ed1",
    users: "2L+ users",
    category: "Trading",
  },
  {
    name: "Tijori",
    logo: "/tijori.svg",
    tagline: "Fundamental Research Platform",
    description: "A comprehensive fundamental analysis timeline tracking corporate actions, shareholding patterns, and sector metrics.",
    link: "#",
    badge: "Research",
    badgeColor: "#8e44ad",
    users: "50K+ users",
    category: "Research",
  },
  {
    name: "Zerodha Fund House",
    logo: "/zerodhafundhouse.png",
    tagline: "Simple, Passive Investing",
    description: "An index-first asset management company building transparent, low-cost mutual funds and ETFs for long-term wealth.",
    link: "#",
    badge: "Investing",
    badgeColor: "#27ae60",
    users: "1L+ investors",
    category: "Investing",
  },
  {
    name: "Sensibull",
    logo: "/sensibullLogo.svg",
    tagline: "Options Trading Platform",
    description: "India's most popular options trading platform. Build strategies, analyse risk, and trade options with confidence.",
    link: "#",
    badge: "Options",
    badgeColor: "#e67e22",
    users: "3L+ traders",
    category: "Trading",
  },
  {
    name: "Smallcase",
    logo: "/smallcaseLogo.png",
    tagline: "Theme-based Investing",
    description: "Invest in professionally managed baskets of stocks & ETFs built around a theme, strategy, or idea.",
    link: "#",
    badge: "New",
    badgeColor: "#16a085",
    users: "30L+ investors",
    category: "Investing",
  },
  {
    name: "GoldenPi",
    logo: "/goldenpiLogo.png",
    tagline: "Bonds & Fixed Income",
    description: "India's largest online bond platform. Invest in government securities, corporate bonds, and tax-free bonds.",
    link: "#",
    badge: "Bonds",
    badgeColor: "#c0392b",
    users: "10K+ investors",
    category: "Research",
  },
];

const categories = ["All", "Trading", "Research", "Investing"];

const Apps = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ecosystemApps.filter((app) => {
    const matchCat = activeCategory === "All" || app.category === activeCategory;
    const matchSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.tagline.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="apps-wrap">
      {/* ── Hero ── */}
      <div className="apps-hero">
        <div>
          <span className="apps-eyebrow">Ecosystem</span>
          <h2 className="apps-title">Zerodha Ecosystem Apps</h2>
          <p className="apps-sub">
            Specialized platforms built on the Kite API to supercharge your investment workflow.
          </p>
        </div>

        {/* Search */}
        <div className="apps-search-wrap">
          <svg className="apps-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="apps-search"
          />
        </div>
      </div>

      {/* ── Category filters ── */}
      <div className="apps-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`apps-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <span className="apps-count">{filtered.length} app{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className="apps-empty">
          <span>🔍</span>
          <p>No apps found for "{search}"</p>
        </div>
      ) : (
        <div className="apps-grid">
          {filtered.map((app) => (
            <div className="app-card" key={app.name}>
              {/* Badge */}
              <span
                className="app-badge"
                style={{ background: `${app.badgeColor}18`, color: app.badgeColor, border: `1px solid ${app.badgeColor}30` }}
              >
                {app.badge}
              </span>

              {/* Logo + name */}
              <div className="app-card__header">
                <div className="app-logo-wrap">
                  <img src={app.logo} alt={app.name} className="app-logo" />
                </div>
                <div>
                  <h3 className="app-name">{app.name}</h3>
                  <span className="app-tagline" style={{ color: app.badgeColor }}>{app.tagline}</span>
                </div>
              </div>

              <p className="app-desc">{app.description}</p>

              {/* Footer */}
              <div className="app-card__footer">
                <span className="app-users">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  {app.users}
                </span>
                <a href={app.link} className="app-launch-btn" target="_blank" rel="noreferrer">
                  Launch App
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;