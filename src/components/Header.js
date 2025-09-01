import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");        
  };

  return (
    <nav className="header">
      {loggedIn ? (
        <div className="nav">
          <Link to="/Dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/Table" className="nav-link">
            Tabuľka
          </Link>
          <Link to="/Tasks" className="nav-link">
            Úlohy
          </Link>
          <button className="btn-secondary" onClick={handleLogout}>
            Odhlásiť sa
          </button>
        </div>
      ) : (
        <div className="nav">
          <Link to="/Login" className="btn-secondary">
            Prihlásiť sa
          </Link>
          <Link to="/Register" className="btn-primary">
            Registrovať sa
          </Link>
        </div>
      )}
    </nav>
  );
}
