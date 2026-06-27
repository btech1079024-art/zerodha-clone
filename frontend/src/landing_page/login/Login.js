import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", { email, password });
      if (response.data.success) {
        // Store auth token and username securely in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        
        // Use full URL redirection to ensure your index.js ProtectedRoute intercepts 
        // the session token accurately on initial state mount
        window.location.href = "http://localhost:3000/dashboard";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", fontFamily: "sans-serif" }}>
      <div style={{ width: "350px", padding: "40px", border: "1px solid #e0e0e0", borderRadius: "4px", textAlign: "center" }}>
        <h2 style={{ color: "#424242", fontWeight: "400", marginBottom: "30px" }}>Login to Kite</h2>
        
        {error && <p style={{ color: "#df514c", fontSize: "14px" }}>{error}</p>}
        
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required 
                 style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required 
                 style={{ width: "100%", padding: "12px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} />
          <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#387ed1", color: "white", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer" }}>
            Login
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
          New to Zerodha? <Link to="/signup" style={{ color: "#387ed1", textDecoration: "none" }}>Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;