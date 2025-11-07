import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "./App.css";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-container">
      <h1>Employee Authentication</h1>
      <div className="toggle-buttons">
        <button
          style={{ backgroundColor: showLogin ? "#0077ff" : "#e4ecf7", color: showLogin ? "#fff" : "#333" }}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          style={{ backgroundColor: !showLogin ? "#0077ff" : "#e4ecf7", color: !showLogin ? "#fff" : "#333" }}
          onClick={() => setShowLogin(false)}
        >
          Register
        </button>
      </div>
      {showLogin ? <LoginPage /> : <RegisterPage />}
    </div>
  );
}
