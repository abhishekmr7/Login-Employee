import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const SignupPage = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/auth/register", {
        username: username.trim(),
        password: password.trim(),
      });
      setMessage(res.data);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data || "❌ Registration failed");
    }
  };

  return (
    <div className="container">
      <h2>📝 Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
      <button onClick={switchToLogin}>Already have an account? Login</button>
    </div>
  );
};

export default SignupPage;
