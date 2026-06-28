import React from "react";
import "./Funds.css"; // We'll create this next to style it beautifully

const Funds = () => {
  // Mock data matching your dashboard's 3.74k balance
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

  return (
    <div className="funds-container">
      {/* Top Action Header */}
      <div className="funds-header">
        <div className="funds-header-left">
          <span>Instant, zero-cost fund transfers with UPI</span>
        </div>
        <div className="funds-header-actions">
          <button className="btn btn-green">Add funds</button>
          <button className="btn btn-blue">Withdraw</button>
        </div>
      </div>

      <hr className="divider" />

      {/* Main Funds Overview Matrix */}
      <div className="funds-matrix">
        {/* Equity Section */}
        <div className="matrix-card">
          <div className="card-title">
            <h3>Equity</h3>
          </div>
          
          <div className="main-stat">
            <span className="label">Available margin</span>
            <span className="value primary-value">₹{equityFunds.availableMargin.toFixed(2)}</span>
          </div>

          <div className="stat-grid">
            <div className="stat-row">
              <span>Opening balance</span>
              <span>{equityFunds.openingBalance.toFixed(2)}</span>
            </div>
            <div className="stat-row">
              <span>Payin</span>
              <span>{equityFunds.payin.toFixed(2)}</span>
            </div>
            <div className="stat-row">
              <span>SPAN</span>
              <span>{equityFunds.span.toFixed(2)}</span>
            </div>
            <div className="stat-row">
              <span>Delivery margin</span>
              <span>{equityFunds.deliveryMargin.toFixed(2)}</span>
            </div>
            <div className="stat-row">
              <span>Exposure</span>
              <span>{equityFunds.exposure.toFixed(2)}</span>
            </div>
            <div className="stat-row">
              <span>Options premium</span>
              <span>{equityFunds.optionsPremium.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Commodity Section (Usually Empty/Separate in India) */}
        <div className="matrix-card">
          <div className="card-title">
            <h3>Commodity</h3>
          </div>
          
          <div className="main-stat">
            <span className="label">Available margin</span>
            <span className="value primary-value">₹0.00</span>
          </div>

          <div className="stat-grid">
            <div className="stat-row">
              <span>Opening balance</span>
              <span>0.00</span>
            </div>
            <div className="stat-row">
              <span>Payin</span>
              <span>0.00</span>
            </div>
            <div className="stat-row">
              <span>SPAN</span>
              <span>0.00</span>
            </div>
            <div className="stat-row">
              <span>Delivery margin</span>
              <span>0.00</span>
            </div>
            <div className="stat-row">
              <span>Exposure</span>
              <span>0.00</span>
            </div>
            <div className="stat-row">
              <span>Options premium</span>
              <span>0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;