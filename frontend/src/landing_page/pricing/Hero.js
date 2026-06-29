import React from "react";
import "./Pricing.css";

function Hero() {
  return (
    <div className="pricing-hero">
      <div className="pricing-hero-inner">
        <span className="pricing-eyebrow">Simple, transparent pricing</span>
        <h1 className="pricing-hero-title">
          Invest more.<br />Pay less.
        </h1>
        <p className="pricing-hero-subtitle">
          Free equity delivery, flat ₹20 on intraday & F&O. No hidden charges, ever.
        </p>
      </div>

      <div className="pricing-cards-row">
        <div className="pricing-highlight-card">
          <div className="pricing-amount">₹0</div>
          <div className="pricing-card-label">Equity Delivery</div>
          <p className="pricing-card-desc">All NSE & BSE equity delivery investments. Zero brokerage, always.</p>
          <img src="media/images/pricingEquity.svg" alt="" className="pricing-card-img" />
        </div>

        <div className="pricing-highlight-card pricing-highlight-card--accent">
          <div className="pricing-amount pricing-amount--white">₹20</div>
          <div className="pricing-card-label pricing-card-label--white">Intraday & F&O</div>
          <p className="pricing-card-desc pricing-card-desc--white">
            Flat ₹20 or 0.03% — whichever is lower — per executed order across equity, currency & commodity.
          </p>
          <img src="media/images/intradayTrades.svg" alt="" className="pricing-card-img pricing-card-img--dim" />
        </div>

        <div className="pricing-highlight-card">
          <div className="pricing-amount">₹0</div>
          <div className="pricing-card-label">Direct Mutual Funds</div>
          <p className="pricing-card-desc">Zero commissions. Zero DP charges. Direct MF investments at no cost.</p>
          <img src="media/images/pricingMF.svg" alt="" className="pricing-card-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;