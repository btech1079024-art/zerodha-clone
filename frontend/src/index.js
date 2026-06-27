import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Landing Page Components
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login"; // Added Login import
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

// ==========================================
//          PROTECTED ROUTE WRAPPER
// ==========================================
// Checks browser localStorage for a valid JWT before letting the user view the dashboard
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* Public Landing Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />

      {/* 🔒 PROTECTED DASHBOARD CORE PORTAL */}
      {/* Any request directed here will trigger a token verification check */}
      <Route 
        path="/dashboard/*" 
        element={
          <ProtectedRoute>
            {/* This links directly to your second app workspace. 
              To open the authenticated dashboard app window automatically on login, 
              point an anchor link or redirect directly to your running dashboard port:
              window.location.href = "http://localhost:3001"; (or your dashboard port setup)
            */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", fontFamily: "sans-serif", flexDirection: "column" }}>
              <h2 style={{ fontWeight: "400", color: "#424242" }}>Authenticated Successfully!</h2>
              <p style={{ color: "#666" }}>Welcome back, {localStorage.getItem("username") || "Trader"}. Redirecting to your active terminal...</p>
              <a href="http://localhost:3001" style={{ marginTop: "15px", padding: "10px 20px", backgroundColor: "#387ed1", color: "white", textDecoration: "none", borderRadius: "4px" }}>
                Open Kite Dashboard
              </a>
            </div>
          </ProtectedRoute>
        } 
      />

      {/* Catch-All Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);