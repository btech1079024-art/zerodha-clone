import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getPasswordStrength = (pwd) => {
    if (!pwd) return null;
    if (pwd.length < 6) return { label: "Too short", level: 1, color: "#e74c3c" };
    if (pwd.length < 8) return { label: "Weak", level: 2, color: "#e67e22" };
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNum = /[0-9]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
    const score = [hasUpper, hasNum, hasSpecial].filter(Boolean).length;
    if (score === 3) return { label: "Strong", level: 4, color: "#2ecc71" };
    if (score === 2) return { label: "Good", level: 3, color: "#387ed1" };
    return { label: "Fair", level: 2, color: "#e67e22" };
  };

  const strength = getPasswordStrength(password);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      const response = await axios.post("https://zerodha-clone-ymu7.vercel.app/signup", {
        username: username.trim(),
        email: email.trim(),
        password: password,
      });

      if (response.data.success) {
        setSuccessMsg("Account created! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page">
      {/* ── LEFT PANEL ── */}
      <div className="signup-left">
        <div className="signup-left-content">
          <div className="signup-brand">
            <img src="/media/images/logo.svg" alt="Zerodha" className="signup-logo" />
          </div>

          <div className="signup-hero">
            <img src="/media/images/homeHero.png" alt="Platform preview" className="signup-hero-img" />
          </div>

          <div className="signup-tagline">
            <h2>Start your investing<br />journey today.</h2>
            <p>Free account. No hidden charges. Zero paperwork.</p>
          </div>

          <div className="signup-perks">
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>₹0 account opening fee</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>Flat ₹20 per executed order</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>Free direct mutual funds</span>
            </div>
            <div className="perk-item">
              <span className="perk-icon">✓</span>
              <span>Award-winning Kite platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="signup-right">
        <div className="signup-form-wrapper">
          {/* Mobile logo */}
          <div className="signup-mobile-logo">
            <img src="/media/images/logo.svg" alt="Zerodha" />
          </div>

          <div className="signup-form-header">
            <h1>Create your account</h1>
            <p>Join over 1 crore investors on Zerodha</p>
          </div>

          {error && (
            <div className="signup-alert signup-alert--error">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="signup-alert signup-alert--success">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className="signup-form" noValidate>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  id="username"
                  type="text"
                  placeholder="e.g. amansinha"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Password strength meter */}
              {password && strength && (
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="strength-bar"
                        style={{
                          background: i <= strength.level ? strength.color : "#e0e0e0",
                        }}
                      />
                    ))}
                  </div>
                  <span className="strength-label" style={{ color: strength.color }}>
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`signup-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner" />
                  Creating account...
                </>
              ) : (
                "Create free account"
              )}
            </button>
          </form>

          <p className="login-prompt">
            Already have an account?{" "}
            <Link to="/login">Sign in</Link>
          </p>

          <div className="signup-footer">
            <p>By signing up you agree to our <a href="#">Terms of use</a> & <a href="#">Privacy policy</a></p>
            <div className="trust-badges">
              <span>🔒 SEBI Registered</span>
              <span>·</span>
              <span>NSE & BSE Member</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;