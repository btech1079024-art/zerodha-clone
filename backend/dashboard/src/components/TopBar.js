import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "./TopBar.css";

const tickerStocks = [
  { symbol: "NIFTY 50",   price: 24285.45, change: +102.35, pct: +0.42 },
  { symbol: "SENSEX",     price: 79812.20, change: +334.10, pct: +0.42 },
  { symbol: "BANKNIFTY",  price: 51423.80, change: -218.55, pct: -0.42 },
  { symbol: "RELIANCE",   price: 2934.60,  change: +41.25,  pct: +1.43 },
  { symbol: "TCS",        price: 3201.75,  change: -28.40,  pct: -0.88 },
  { symbol: "INFY",       price: 1558.30,  change: +19.60,  pct: +1.27 },
  { symbol: "HDFC BANK",  price: 1712.45,  change: +12.80,  pct: +0.75 },
  { symbol: "WIPRO",      price: 578.90,   change: -4.35,   pct: -0.75 },
  { symbol: "ICICI BANK", price: 1243.60,  change: +22.15,  pct: +1.81 },
  { symbol: "ONGC",       price: 118.45,   change: +0.95,   pct: +0.81 },
];

const TopBar = () => {
  const [prices, setPrices] = useState(tickerStocks);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((stock) => {
          const delta = (Math.random() - 0.48) * stock.price * 0.002;
          const newPrice = +(stock.price + delta).toFixed(2);
          const newChange = +(stock.change + delta).toFixed(2);
          const newPct = +((newChange / (stock.price - stock.change)) * 100).toFixed(2);
          return { ...stock, price: newPrice, change: newChange, pct: newPct };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar-container">
      {/* Ticker strip */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...prices, ...prices].map((stock, i) => (
            <div className="ticker-item" key={i}>
              <span className="ticker-symbol">{stock.symbol}</span>
              <span className="ticker-price">
                {stock.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
              <span className={`ticker-change ${stock.change >= 0 ? "up" : "down"}`}>
                {stock.change >= 0 ? "▲" : "▼"} {Math.abs(stock.pct).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu bar */}
      <Menu />
    </div>
  );
};

export default TopBar;