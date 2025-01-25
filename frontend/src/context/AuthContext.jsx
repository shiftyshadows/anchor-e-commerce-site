import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Updated import

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the token
        setIsAuthenticated(true);
        setIsAdmin(decoded.isAdmin); // Extract isAdmin flag
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token); // Decode the token on login
    setIsAuthenticated(true);
    setIsAdmin(decoded.isAdmin);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
