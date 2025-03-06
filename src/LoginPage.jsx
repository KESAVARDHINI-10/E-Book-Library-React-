import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import login from "./login.png";
const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Kesavardhini" && password === "1234") {
      setIsAuthenticated(true);
      navigate("/home"); 
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
     
      <div className="image-section">
      <img src={login} alt="Login Image"></img>
      </div>
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
