import React from "react";
import "./Products.css";

const partners = [
  {
    logo: "media/images/smallcaseLogo.png",
    name: "Smallcase",
    description: "Invest in curated stock & ETF baskets built around ideas and themes.",
    badge: "Investing",
  },
  {
    logo: "media/images/sensibullLogo.svg",
    name: "Sensibull",
    description: "India's first options trading platform with strategy builders and payoff charts.",
    badge: "Options",
  },
  {
    logo: "media/images/zerodhaFundhouse.png",
    name: "Zerodha Fund House",
    description: "Index-first, low-cost mutual funds for long-term passive investors.",
    badge: "Mutual Funds",
  },
  {
    logo: "media/images/goldenpiLogo.png",
    name: "GoldenPi",
    description: "Discover and invest in bonds and fixed-income instruments online.",
    badge: "Bonds",
  },
  {
    logo: "media/images/tijori.svg",
    name: "Tijori",
    description: "Comprehensive fundamental analysis with corporate actions and shareholder data.",
    badge: "Research",
  },
  {
    logo: "media/images/streakLogo.png",
    name: "Streak",
    description: "Create, backtest and deploy algo trading strategies — no coding needed.",
    badge: "Algo Trading",
  },
];

function Universe() {
  return (
    <section className="universe-section">
      <div className="universe-header">
        <span className="products-eyebrow">Ecosystem</span>
        <h2 className="universe-title">The ZeroPro Universe</h2>
        <p className="universe-subtitle">
          Extend your trading experience with powerful partner platforms — all connected to your ZeroPro account.
        </p>
      </div>

      <div className="universe-grid">
        {partners.map((partner) => (
          <div className="partner-card" key={partner.name}>
            <div className="partner-card-top">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
              <span className="partner-badge">{partner.badge}</span>
            </div>
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>

      <div className="universe-cta">
        <a href="/signup" className="btn-universe-cta">
          Start investing for free
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Universe;