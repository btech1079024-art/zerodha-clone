import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist as initialWatchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  // 1. Move static mock data into state so React can force re-renders on price shifts
  const [stocks, setStocks] = useState(initialWatchlist);

  // 2. Simulate continuous real-time market data ticks
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          // Selectively pick a random stock to change so the entire panel doesn't blink at once
          if (Math.random() > 0.4) return stock; 

          // Calculate small decimal fractional movements
          const changePercent = (Math.random() * 0.15).toFixed(2);
          const isUp = Math.random() > 0.5;
          const delta = parseFloat((stock.price * (changePercent / 100)).toFixed(2));

          const oldPrice = stock.price;
          const newPrice = isUp ? oldPrice + delta : oldPrice - delta;
          
          // Capture movement orientation for the temporary flash triggers
          const flashDirection = newPrice > oldPrice ? "flash-green" : "flash-red";

          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            percent: `${isUp ? "+" : "-"}${changePercent}%`,
            isDown: !isUp,
            flashClass: flashDirection, // Apply background flash classes dynamically
          };
        })
      );

      // Clean up the temporary glow flags after 400ms so they can trigger cleanly on the next tick
      setTimeout(() => {
        setStocks((currentStocks) =>
          currentStocks.map((s) => ({ ...s, flashClass: "" }))
        );
      }, 400);

    }, 2500); // Ticks every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const labels = stocks.map((s) => s.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: stocks.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {stocks.length} / 50</span>
      </div>

      <ul className="list">
        {stocks.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
      className={stock.flashClass || ""} // Handles appending dynamic CSS selectors seamlessly
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up-icon" /> 
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};