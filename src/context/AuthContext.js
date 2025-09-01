import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
