import React from "react";

const features = [
  {
    title: "Customer-first always",
    body: "1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.",
  },
  {
    title: "No spam or gimmicks",
    body: "No gamification, spam, or annoying push notifications. High quality apps that work your way.",
  },
  {
    title: "The Zerodha universe",
    body: "Not just an app — a whole ecosystem. Our investments in 30+ fintech startups serve your every need.",
  },
  {
    title: "Do better with money",
    body: "With Nudge and Kill Switch, we actively help you make smarter financial decisions.",
  },
];

function Stats() {
  return (
    <section className="zp-stats" id="stats">
      <div className="zp-section-inner zp-stats__grid">
        <div className="zp-stats__content">
          <span className="zp-eyebrow">Why Zerodha</span>
          <h2 className="zp-section-title">Trust with confidence</h2>

          <div className="zp-feature-list">
            {features.map(({ title, body }) => (
              <div key={title} className="zp-feature-item">
                <div className="zp-feature-item__dot" />
                <div>
                  <h3 className="zp-feature-item__title">{title}</h3>
                  <p className="zp-feature-item__body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="zp-stats__visual">
          <img src="media/images/ecosystem.png" alt="Zerodha ecosystem" className="zp-stats__img" />
          <div className="zp-stats__links">
            <a href="/product" className="zp-text-link">
              Explore our products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" className="zp-text-link">
              Try Kite demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;