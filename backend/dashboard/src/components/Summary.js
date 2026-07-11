import React, { useState, useEffect } from "react";
import "./Summary.css";

// Sparkline mini chart using SVG
const Sparkline = ({ positive }) => {
  const points = positive
    ? "0,30 10,25 20,28 30,18 40,22 50,12 60,16 70,8 80,14 90,5 100,10"
    : "0,10 10,14 20,8 30,18 40,12 50,22 60,16 70,26 80,20 90,28 100,30";
  return (
    <svg width="100" height="36" viewBox="0 0 100 36" className="sparkline">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#2ecc71" : "#e74c3c"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Summary = () => {
  const [pnl, setPnl] = useState(1550);
  const [currentVal, setCurrentVal] = useState(31430);

  // Simulate live P&L movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPnl((prev) => +(prev + (Math.random() - 0.48) * 20).toFixed(0));
      setCurrentVal((prev) => +(prev + (Math.random() - 0.48) * 30).toFixed(0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const investment = 29880;
  const pnlPct = (((currentVal - investment) / investment) * 100).toFixed(2);
  const isProfitable = pnl >= 0;

  return (
    <div className="summary-wrap">
      {/* Greeting */}
      <div className="summary-greeting">
        <div>
          <h2 className="summary-greeting__name">Good morning, User 👋</h2>
          <p className="summary-greeting__sub">Here's your portfolio snapshot for today</p>
        </div>
        <div className="summary-greeting__date">
          {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </div>
      </div>

      {/* Cards row */}
      <div className="summary-cards">

        {/* Equity / Margin card */}
        <div className="sum-card">
          <div className="sum-card__header">
            <div>
              <p className="sum-card__label">Equity</p>
              <h3 className="sum-card__value">₹3,740<span className="sum-card__unit">.00</span></h3>
              <p className="sum-card__sub">Margin available</p>
            </div>
            <div className="sum-card__icon sum-card__icon--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/>
              </svg>
            </div>
          </div>
          <div className="sum-card__divider" />
          <div className="sum-card__meta">
            <div className="sum-card__meta-item">
              <span className="sum-card__meta-label">Margins used</span>
              <span className="sum-card__meta-val">₹0</span>
            </div>
            <div className="sum-card__meta-item">
              <span className="sum-card__meta-label">Opening balance</span>
              <span className="sum-card__meta-val">₹3,740</span>
            </div>
          </div>
        </div>

        {/* Holdings / P&L card */}
        <div className="sum-card">
          <div className="sum-card__header">
            <div>
              <p className="sum-card__label">Holdings (13)</p>
              <h3 className={`sum-card__value ${isProfitable ? "profit" : "loss"}`}>
                ₹{Math.abs(pnl).toLocaleString("en-IN")}
                <small className={`sum-card__pct ${isProfitable ? "profit" : "loss"}`}>
                  {isProfitable ? "▲" : "▼"} {Math.abs(pnlPct)}%
                </small>
              </h3>
              <p className="sum-card__sub">Total P&L</p>
            </div>
            <Sparkline positive={isProfitable} />
          </div>
          <div className="sum-card__divider" />
          <div className="sum-card__meta">
            <div className="sum-card__meta-item">
              <span className="sum-card__meta-label">Current value</span>
              <span className="sum-card__meta-val">₹{currentVal.toLocaleString("en-IN")}</span>
            </div>
            <div className="sum-card__meta-item">
              <span className="sum-card__meta-label">Invested</span>
              <span className="sum-card__meta-val">₹{investment.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        {/* Commodity card */}
        <div className="sum-card">
          <div className="sum-card__header">
            <div>
              <p className="sum-card__label">Commodity</p>
              <h3 className="sum-card__value">₹0<span className="sum-card__unit">.00</span></h3>
              <p className="sum-card__sub">Margin available</p>
            </div>
            <div className="sum-card__icon sum-card__icon--gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
            </div>
          </div>
          <div className="sum-card__divider" />
          <div className="sum-card__meta">
            <div className="sum-card__meta-item">
              <span className="sum-card__meta-label">Margins used</span>
              <span className="sum-card__meta-val">₹0</span>
            </div>
            <div className="sum-card__meta-item">
              <span className="sum-card__meta-label">Account value</span>
              <span className="sum-card__meta-val">₹0</span>
            </div>
          </div>
        </div>

      </div>

      {/* P&L breakdown banner */}
      <div className={`pnl-banner ${isProfitable ? "pnl-banner--profit" : "pnl-banner--loss"}`}>
        <div className="pnl-banner__left">
          <span className="pnl-banner__icon">{isProfitable ? "📈" : "📉"}</span>
          <div>
            <p className="pnl-banner__title">Today's portfolio is {isProfitable ? "in profit" : "in loss"}</p>
            <p className="pnl-banner__sub">Live P&L updates every few seconds</p>
          </div>
        </div>
        <div className="pnl-banner__right">
          <span className={`pnl-banner__amount ${isProfitable ? "profit" : "loss"}`}>
            {isProfitable ? "+" : "-"}₹{Math.abs(pnl).toLocaleString("en-IN")}
          </span>
          <span className={`pnl-banner__pct ${isProfitable ? "profit" : "loss"}`}>
            {isProfitable ? "▲" : "▼"} {Math.abs(pnlPct)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;