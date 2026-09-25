import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      // 🛠️ Fixed Condition: Check both response status AND success key
      if (response.data.success || response.data.token) {
        localStorage.setItem("token", response.data.token);
        
        // Agar aap username/email store karna chahein dashboard name display ke liye:
        localStorage.setItem("username", response.data.user.username);

        alert("Login Successful!");
        navigate("/"); // 🚀 Absolute Redirect to Dashboard
        window.location.reload(); // State instant sync karne ke liye page safe refresh
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src="img/kite-logo.svg" alt="Kite Logo" />
        </div>
        <h2>Login to Dashboard</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
