import React from "react";

const instruments = [
  { icon: "📈", label: "Futures & Options" },
  { icon: "🥇", label: "Commodity derivatives" },
  { icon: "💱", label: "Currency derivatives" },
  { icon: "🏢", label: "Stocks & IPOs" },
  { icon: "📊", label: "Direct mutual funds" },
  { icon: "🏛️", label: "Bonds & Govt. Securities" },
];

function Awards() {
  return (
    <section className="zp-awards">
      <div className="zp-section-inner zp-awards__grid">
        <div className="zp-awards__visual">
          <img src="media/images/largestBroker.svg" alt="Largest broker badge" className="zp-awards__badge" />
        </div>

        <div className="zp-awards__content">
          <span className="zp-eyebrow">Market leadership</span>
          <h2 className="zp-section-title">Largest stock broker<br />in India</h2>
          <p className="zp-section-body">
            1.3 crore+ Zerodha clients contribute to over 15% of all retail order volumes in India daily — trading and investing across every major asset class.
          </p>

          <div className="zp-awards__instruments">
            {instruments.map(({ icon, label }) => (
              <div key={label} className="zp-instrument-chip">
                <span className="zp-instrument-chip__icon">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="zp-awards__press">
            <p className="zp-press-label">As seen in</p>
            <img src="media/images/pressLogos.png" alt="Press coverage" className="zp-press-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;