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
//           PROTECTED ROUTE WRAPPER
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
        element = {
          <ProtectedRoute>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", fontFamily: "sans-serif", flexDirection: "column", textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "50px", marginBottom: "10px" }}>🚀</div>
              <h2 style={{ fontWeight: "400", color: "#424242", margin: "10px 0" }}>Authenticated Successfully!</h2>
              <p style={{ color: "#666", maxWidth: "450px", lineHeight: "1.5", marginBottom: "20px" }}>
                Welcome back, <strong>{localStorage.getItem("username") || "Trader"}</strong>. Your live Kite session token is secure and active.
              </p>
              <button 
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }} 
                style={{ padding: "10px 20px", backgroundColor: "#df514c", color: "white", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", fontWeight: "500" }}
              >
                Logout Session
              </button>
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