import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    price: "₹0",
    label: "Equity delivery",
    desc: "Free equity delivery and direct mutual funds. Zero commissions, forever.",
    highlight: false,
  },
  {
    price: "₹20",
    label: "Intraday & F&O",
    desc: "Flat ₹20 per executed order on intraday trades and all F&O transactions.",
    highlight: true,
  },
];

function Pricing() {
  return (
    <section className="zp-pricing">
      <div className="zp-section-inner zp-pricing__grid">
        <div className="zp-pricing__intro">
          <span className="zp-eyebrow">Transparent fees</span>
          <h2 className="zp-section-title">Unbeatable pricing</h2>
          <p className="zp-section-body">
            We pioneered discount broking and price transparency in India. Flat fees, no hidden charges — ever.
          </p>
          <Link to="/pricing" className="zp-text-link">
            See full pricing
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="zp-pricing__cards">
          {plans.map(({ price, label, desc, highlight }) => (
            <div key={label} className={`zp-price-card ${highlight ? "zp-price-card--highlight" : ""}`}>
              <div className="zp-price-card__amount">{price}</div>
              <div className="zp-price-card__label">{label}</div>
              <p className="zp-price-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;