import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import "./Pricing.css";

function PricingPage() {
  return (
    <div className="pricing-page">
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
}

export default PricingPage;