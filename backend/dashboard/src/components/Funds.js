import React, { useState } from "react";
import "./Funds.css";

const Funds = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const equityFunds = {
    availableMargin: 3740.00,
    netCash: 3740.00,
    openingBalance: 3740.00,
    payin: 0.00,
    payout: 0.00,
    span: 0.00,
    deliveryMargin: 0.00,
    exposure: 0.00,
    optionsPremium: 0.00,
    collateral: 0.00,
  };

  const handleAddFunds = () => {
    if (!addAmount || isNaN(addAmount)) return;
    setShowAddModal(false);
    setSuccessMsg(`₹${Number(addAmount).toLocaleString("en-IN")} added successfully!`);
    setAddAmount("");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const segments = [
    {
      title: "Equity",
      available: equityFunds.availableMargin,
      color: "#387ed1",
      rows: [
        { label: "Opening balance",  value: equityFunds.openingBalance },
        { label: "Payin",            value: equityFunds.payin },
        { label: "SPAN margin",      value: equityFunds.span },
        { label: "Delivery margin",  value: equityFunds.deliveryMargin },
        { label: "Exposure margin",  value: equityFunds.exposure },
        { label: "Options premium",  value: equityFunds.optionsPremium },
      ],
    },
    {
      title: "Commodity",
      available: 0,
      color: "#f39c12",
      rows: [
        { label: "Opening balance",  value: 0 },
        { label: "Payin",            value: 0 },
        { label: "SPAN margin",      value: 0 },
        { label: "Delivery margin",  value: 0 },
        { label: "Exposure margin",  value: 0 },
        { label: "Options premium",  value: 0 },
      ],
    },
  ];

  return (
    <div className="funds-wrap">

      {/* ── Success toast ── */}
      {successMsg && (
        <div className="funds-toast">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          {successMsg}
        </div>
      )}

      {/* ── Header ── */}
      <div className="funds-header">
        <div>
          <h2 className="funds-title">Funds</h2>
          <p className="funds-subtitle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Instant, zero-cost fund transfers with UPI
          </p>
        </div>
        <div className="funds-actions">
          <button className="funds-btn funds-btn--green" onClick={() => setShowAddModal(true)}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add funds
          </button>
          <button className="funds-btn funds-btn--blue">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
            Withdraw
          </button>
        </div>
      </div>

      <div className="funds-divider" />

      {/* ── Cards grid ── */}
      <div className="funds-grid">
        {segments.map(({ title, available, color, rows }) => (
          <div className="funds-card" key={title}>
            {/* Card header */}
            <div className="funds-card__header">
              <span className="funds-card__title">{title}</span>
              <span className="funds-card__dot" style={{ background: color }} />
            </div>

            {/* Big available margin number */}
            <div className="funds-card__main">
              <p className="funds-card__main-label">Available margin</p>
              <h3 className="funds-card__main-value" style={{ color }}>
                ₹{available.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </h3>
              {/* Usage bar */}
              <div className="funds-usage-bar">
                <div
                  className="funds-usage-bar__fill"
                  style={{ width: available > 0 ? "100%" : "0%", background: color }}
                />
              </div>
              <p className="funds-usage-label">
                {available > 0 ? "100% available" : "No funds available"}
              </p>
            </div>

            <div className="funds-card__divider" />

            {/* Stat rows */}
            <div className="funds-card__rows">
              {rows.map(({ label, value }) => (
                <div className="funds-stat-row" key={label}>
                  <span className="funds-stat-row__label">{label}</span>
                  <span className="funds-stat-row__value">
                    ₹{value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Add Funds Modal ── */}
      {showAddModal && (
        <div className="funds-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="funds-modal" onClick={(e) => e.stopPropagation()}>
            <div className="funds-modal__header">
              <h3>Add funds</h3>
              <button className="funds-modal__close" onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <p className="funds-modal__sub">Instant transfer via UPI / Net Banking</p>
            <div className="funds-modal__input-wrap">
              <span className="funds-modal__rupee">₹</span>
              <input
                type="number"
                placeholder="Enter amount"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                className="funds-modal__input"
                autoFocus
              />
            </div>
            <div className="funds-modal__presets">
              {[1000, 5000, 10000, 25000].map((amt) => (
                <button key={amt} className="funds-preset-btn" onClick={() => setAddAmount(amt)}>
                  +₹{amt.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <button className="funds-modal__confirm" onClick={handleAddFunds}>
              Confirm & Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;