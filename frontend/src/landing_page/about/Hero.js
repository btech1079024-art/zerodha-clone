import React from "react";
import "./about.css";

function Hero() {
  return (
    <section className="ab-hero">
      <div className="ab-inner">

        {/* Top headline */}
        <div className="ab-hero__header">
          <span className="ab-eyebrow">Our story</span>
          <h1 className="ab-hero__headline">
            We pioneered discount broking in India.<br />
            Now we're redefining it with technology.
          </h1>
        </div>

        {/* Two-column story */}
        <div className="ab-hero__body">
          <div className="ab-hero__col">
            <p>
              We kicked off operations on 15th August 2010 with a single goal — break every barrier traders and investors face in India: cost, support, and technology. We named the company <strong>Zerodha</strong>, a blend of Zero and <em>Rodha</em>, the Sanskrit word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India. Over 1.3 crore clients place millions of orders every day through our ecosystem, contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="ab-hero__col">
            <p>
              We also run popular open educational and community initiatives — Varsity and TradingQ&A — to empower retail traders and investors across India.
            </p>
            <p>
              <a href="https://rainmatter.com" target="_blank" rel="noreferrer" className="ab-link">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new. Catch up on the latest on our blog or see what the media is saying about us.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="ab-stats-row">
          <div className="ab-stat">
            <span className="ab-stat__num">1.3Cr+</span>
            <span className="ab-stat__label">Active clients</span>
          </div>
          <div className="ab-stat__divider" />
          <div className="ab-stat">
            <span className="ab-stat__num">15%</span>
            <span className="ab-stat__label">Of India's retail volumes</span>
          </div>
          <div className="ab-stat__divider" />
          <div className="ab-stat">
            <span className="ab-stat__num">2010</span>
            <span className="ab-stat__label">Founded</span>
          </div>
          <div className="ab-stat__divider" />
          <div className="ab-stat">
            <span className="ab-stat__num">₹0</span>
            <span className="ab-stat__label">Account opening fee</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;