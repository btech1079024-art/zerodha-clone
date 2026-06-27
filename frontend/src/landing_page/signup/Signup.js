import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    try {
      const response = await axios.post("https://zerodha-clone-kappa-six.vercel.app/login", {
        username: username.trim(), // Cleans up any trailing spaces
        email: email.trim(),
        password: password
      });

      if (response.data.success) {
        setSuccessMsg("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      // Displays the exact error reason from your express backend console logs
      setError(err.response?.data?.message || "Connection to registration server failed.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", fontFamily: "sans-serif", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "380px", padding: "40px", border: "1px solid #e0e0e0", borderRadius: "4px", textAlign: "center", backgroundColor: "#fff" }}>
        <h2 style={{ color: "#424242", fontWeight: "400", marginBottom: "10px" }}>Join Zerodha</h2>
        <p style={{ color: "#9b9b9b", fontSize: "14px", marginBottom: "30px" }}>Open a free online stock trading and investment account.</p>

        {error && <p style={{ color: "#df514c", fontSize: "14px", fontWeight: "500" }}>{error}</p>}
        {successMsg && <p style={{ color: "#2bd070", fontSize: "14px", fontWeight: "500" }}>{successMsg}</p>}

        <form onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Username (e.g., amansinha)" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: "100%", padding: "12px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: "100%", padding: "12px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} 
          />
          <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#387ed1", color: "white", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer", fontWeight: "500" }}>
            Continue
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
          Already have an account? <Link to="/login" style={{ color: "#387ed1", textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;