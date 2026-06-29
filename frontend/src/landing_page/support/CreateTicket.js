import React, { useState } from "react";
import "./Support.css";

const categories = [
  {
    icon: "👤",
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "NRI Account Opening",
      "Charges at ZeroPro",
      "ZeroPro IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    icon: "💰",
    title: "Your Funds",
    links: [
      "Add funds to your account",
      "Withdraw funds",
      "Adding a bank account",
      "eMandates",
      "Fund transfer issues",
      "Payment gateway issues",
    ],
  },
  {
    icon: "📊",
    title: "Trading & Markets",
    links: [
      "Placing orders on Kite",
      "Order types & validity",
      "Intraday margins (MIS)",
      "Cover & bracket orders",
      "Market hours & holidays",
      "Circuit limits & filters",
    ],
  },
  {
    icon: "📁",
    title: "Holdings & Portfolio",
    links: [
      "Viewing your holdings",
      "Pledging shares",
      "Corporate actions",
      "Stock transfers",
      "Demat account issues",
      "Dividend & bonus",
    ],
  },
  {
    icon: "📋",
    title: "F&O & Derivatives",
    links: [
      "F&O segment activation",
      "F&O margin requirements",
      "Expiry & settlement",
      "Options exercise",
      "Physical delivery",
      "F&O reporting for taxes",
    ],
  },
  {
    icon: "🧾",
    title: "Payments & Charges",
    links: [
      "Brokerage charges",
      "DP charges explained",
      "GST on brokerage",
      "P&L and tax reports",
      "Annual charges",
      "NRI brokerage",
    ],
  },
];

function CreateTicket() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="ticket-section">
      <div className="ticket-section-inner">
        <div className="ticket-header">
          <span className="support-eyebrow">Raise a ticket</span>
          <h2 className="ticket-title">Select a topic to get started</h2>
          <p className="ticket-subtitle">
            Pick the category that best describes your issue and we'll route it to the right team.
          </p>
        </div>

        <div className="ticket-grid">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`ticket-card ${expanded === i ? "ticket-card--open" : ""}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="ticket-card-header">
                <div className="ticket-card-left">
                  <span className="ticket-icon">{cat.icon}</span>
                  <h3 className="ticket-cat-title">{cat.title}</h3>
                </div>
                <svg
                  className={`ticket-chevron ${expanded === i ? "ticket-chevron--open" : ""}`}
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {expanded === i && (
                <ul className="ticket-links-list">
                  {cat.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="ticket-link">
                        {link}
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;