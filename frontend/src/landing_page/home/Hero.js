import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="zp-hero">
      <div className="zp-hero__inner">
        <div className="zp-hero__text">
          <span className="zp-hero__eyebrow">India's #1 Stock Broker</span>
          <h1 className="zp-hero__headline">
            Invest in <span className="zp-hero__accent">everything.</span>
          </h1>
          <p className="zp-hero__sub">
            Stocks, F&O, mutual funds, bonds, IPOs — all on one lightning-fast platform. Zero account opening fee.
          </p>
          <div className="zp-hero__actions">
            <Link to="/signup" className="zp-btn zp-btn--primary">Open free account</Link>
            <a href="#stats" className="zp-btn zp-btn--ghost">See how it works</a>
          </div>
          <p className="zp-hero__trust">
            Trusted by <strong>1.3 crore+</strong> investors &nbsp;·&nbsp; ₹3.5L crore in assets
          </p>
        </div>
        <div className="zp-hero__img-wrap">
          <img src="media/images/homeHero.png" alt="Kite trading platform" className="zp-hero__img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;