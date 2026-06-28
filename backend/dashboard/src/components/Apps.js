import React from "react";
import "./Apps.css"; // We'll style it beautifully below

const Apps = () => {
  // Product dataset using your public folder assets
  const ecosystemApps = [
    {
      name: "Streak",
      logo: "/streak-logo.png", 
      tagline: "Algo & Systematic Trading",
      description: "Create, backtest, and deploy trading strategies live in the market without coding.",
      link: "#",
      badge: "Popular"
    },
    {
      name: "Tijori",
      logo: "/tijori.svg",
      tagline: "Fundamental Research Platform",
      description: "A comprehensive fundamental analysis timeline, tracking corporate actions, shareholding patterns, and sector metrics.",
      link: "#",
      badge: "Research"
    },
    {
      name: "Zerodha Fund House",
      logo: "/zerodhafundhouse.png",
      tagline: "Simple, Passive Investing",
      description: "An index-first asset management company building transparent, low-cost mutual funds and ETFs.",
      link: "#",
      badge: "Investing"
    }
  ];

  return (
    <div className="apps-page-container">
      {/* Top Hero Section */}
      <div className="apps-hero">
        <h2>Zerodha Ecosystem Apps</h2>
        <p>Explore specialized platforms built on top of the Kite API to supercharge your investment workflow.</p>
        <div className="hero-divider"></div>
      </div>

      {/* Product Grid Showcase */}
      <div className="apps-grid">
        {ecosystemApps.map((app, index) => (
          <div className="app-card" key={index}>
            {app.badge && <span className="app-badge">{app.badge}</span>}
            
            <div className="app-card-header">
              <div className="logo-wrapper">
                <img src={app.logo} alt={`${app.name} logo`} className="app-logo-img" />
              </div>
              <h3>{app.name}</h3>
              <span className="app-tagline">{app.tagline}</span>
            </div>

            <p className="app-description">{app.description}</p>

            <div className="app-card-footer">
              <a href={app.link} className="btn-explore" target="_blank" rel="noreferrer">
                Launch App
                <span className="arrow-icon"> →</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;