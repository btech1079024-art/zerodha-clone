import React from "react";

const resources = [
  {
    name: "Varsity",
    href: "https://zerodha.com/varsity/",
    desc: "The largest online stock market education platform in the world — covering everything from basics to advanced trading strategies.",
    tag: "Free learning",
  },
  {
    name: "TradingQ&A",
    href: "https://tradingqna.com/",
    desc: "India's most active trading and investment community. Get your market queries answered by experts and fellow traders.",
    tag: "Community",
  },
];

function Education() {
  return (
    <section className="zp-education">
      <div className="zp-section-inner zp-education__grid">
        <div className="zp-education__visual">
          <img src="media/images/education.svg" alt="Market education" className="zp-education__img" />
        </div>

        <div className="zp-education__content">
          <span className="zp-eyebrow">Learn & grow</span>
          <h2 className="zp-section-title">Free and open<br />market education</h2>

          <div className="zp-edu-resources">
            {resources.map(({ name, href, desc, tag }) => (
              <div key={name} className="zp-edu-card">
                <div className="zp-edu-card__header">
                  <span className="zp-edu-card__name">{name}</span>
                  <span className="zp-edu-card__tag">{tag}</span>
                </div>
                <p className="zp-edu-card__desc">{desc}</p>
                <a href={href} target="_blank" rel="noreferrer" className="zp-text-link">
                  Visit {name}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;