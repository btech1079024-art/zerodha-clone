import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import "./Support.css";

function SupportPage() {
  return (
    <div className="support-page">
      <Hero />
      <CreateTicket />
    </div>
  );
}

export default SupportPage;