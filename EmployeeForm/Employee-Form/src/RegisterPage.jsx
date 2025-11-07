import React, { useState } from "react";
import "./App.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [msg, setMsg] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });
      const text = await res.text();
      setMsg(text);
    } catch {
      setMsg("⚠️ Server error");
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <select value={role} onChange={e=>setRole(e.target.value)}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button type="submit">Register</button>
      {msg && <div className="message">{msg}</div>}
    </form>
  );
}
