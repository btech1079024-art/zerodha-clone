import React from "react";
import "./Pricing.css";

const charges = [
  "Call & Trade and RMS auto-squareoff: additional ₹50 + GST per order.",
  "Digital contract notes sent via e-mail.",
  "Physical contract notes charged at ₹20 per note; courier charges apply.",
  "NRI account (non-PIS): 0.5% or ₹100 per executed equity order, whichever is lower.",
  "NRI account (PIS): 0.5% or ₹200 per executed equity order, whichever is lower.",
  "Debit balance accounts: ₹40 per executed order instead of the standard ₹20.",
];

function Brokerage() {
  return (
    <section className="brokerage-section">
      <div className="brokerage-inner">

        <div className="brokerage-left">
          <span className="pricing-eyebrow">Tools</span>
          <h2 className="brokerage-title">Calculate your brokerage</h2>
          <p className="brokerage-sub">
            Use our brokerage calculator to estimate charges before you trade.
          </p>
          <a href="#" className="brokerage-cta">
            Open calculator
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="brokerage-right">
          <div className="charges-card">
            <div className="charges-card-header">
              <h3 className="charges-title">Additional charges</h3>
              <a href="#" className="charges-list-link">Full list of charges →</a>
            </div>
            <ul className="charges-list">
              {charges.map((charge, i) => (
                <li key={i} className="charges-item">
                  <span className="charges-dot"></span>
                  {charge}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Brokerage;