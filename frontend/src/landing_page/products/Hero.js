import React from "react";
import "./Products.css";

function Hero() {
  return (
    <div className="products-hero">
      <div className="products-hero-inner">
        <span className="products-eyebrow">Our Platforms</span>
        <h1 className="products-hero-title">
          Built for speed.<br />Designed for clarity.
        </h1>
        <p className="products-hero-subtitle">
          Sleek, modern, and intuitive trading platforms trusted by over 1.5 crore investors.
        </p>
        <a href="/signup" className="products-hero-cta">
          Open a free account
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <div className="products-hero-bg-accent"></div>
    </div>
  );
}

export default Hero;