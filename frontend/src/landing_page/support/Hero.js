import React, { useState } from "react";
import "./Support.css";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

const featured = [
  "Current Takeovers and Delisting - January 2024",
  "Latest Intraday leverages - MIS & CO",
  "Upcoming F&O expiry schedule",
  "Changes to margin requirements",
];

function Hero() {
  const [query, setQuery] = useState("");

  return (
    <div className="support-hero">
      <div className="support-hero-topbar">
        <span className="support-portal-label">Support Portal</span>
        <a href="#" className="support-track-btn">
          Track tickets
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className="support-hero-inner">
        <div className="support-hero-left">
          <span className="support-eyebrow">Help Center</span>
          <h1 className="support-hero-title">How can we help you?</h1>
          <p className="support-hero-subtitle">
            Search our help topics or browse categories to raise a ticket.
          </p>

          <div className="support-search-wrap">
            <svg className="support-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              className="support-search-input"
              type="text"
              placeholder="e.g. how do I activate F&O?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="support-quick-links">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="support-quick-chip">{link}</a>
            ))}
          </div>
        </div>

        <div className="support-hero-right">
          <div className="support-featured-card">
            <div className="support-featured-header">
              <span className="support-featured-label">Featured updates</span>
            </div>
            <ol className="support-featured-list">
              {featured.map((item, i) => (
                <li key={i} className="support-featured-item">
                  <span className="support-featured-num">{String(i + 1).padStart(2, "0")}</span>
                  <a href="#" className="support-featured-link">{item}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;