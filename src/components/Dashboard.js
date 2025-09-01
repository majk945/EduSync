import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function DashboardComponents() {
  const { username } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{username ? `Vitaj, ${username}!` : "Dashboard"}</h1>
    </div>
  );
}
