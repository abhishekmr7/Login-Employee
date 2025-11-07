import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const HomePage = ({ switchToLogin }) => {
  const username = localStorage.getItem("username");

  const handleLogout = async () => {
    try {
      await axios.post(`http://localhost:8080/auth/logout?username=${username}`);
      localStorage.removeItem("username");
      alert("👋 Logged out successfully!");
      switchToLogin();
    } catch {
      alert("Logout failed");
    }
  };

  return (
    <div className="container">
      <h2>Welcome, {username} 👋</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
