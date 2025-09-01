import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/Register",
        { username, password },
        { withCredentials: true }
      );
      setMessage(res.data.message);
      setRegistered(true);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error");
      setRegistered(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
       <div
        className="grid grid-cols-1 gap-md"
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <input className="form-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className="form-input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn-primary" onClick={register}>Register</button>
      <p className="form-label">{message}</p>

      {registered && (
        <p>
          <a className="badge anchor hover-glow" href="/Login">Prihlásiť sa</a>
        </p>
      )}
    </div>
    </div>
  );
}
