import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"; // Import the CSS file

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Update localStorage and state
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true); // Notify the parent component
      console.log("Login successful, redirecting to /admin");
      navigate("/admin"); // Redirect to admin panel
    } else {
      const data = await response.json();
      alert(data.message || "Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
