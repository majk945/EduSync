import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Esd.css";

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { setLoggedIn, setUsername } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/Login",
        { username: usernameInput, password },
        { withCredentials: true }
      );

      // Nastavenie kontextu
      setLoggedIn(true);
      setUsername(res.data.user.username);

      // Presmerovanie na Dashboard
      navigate("/Dashboard");
    } catch (err) {
      setMessage(err.response?.data?.error || "Chyba");
      setLoggedIn(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div
        className="grid grid-cols-1 gap-md"
        style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          className="form-input"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />
        <button className="btn-primary" onClick={login} style={{ width: "100%", padding: "10px" }}>
          Login
        </button>
        <p style={{ marginTop: "10px", textAlign: "center", color: "red" }}>{message}</p>
      </div>
    </div>
  );
}
