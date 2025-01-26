import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Access authentication state
import "../styles/components.css"; // Import styles

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext); // Destructure auth state and logout function

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Anchor E-Commerce</Link>
      </div>
      <ul className="navbar-links">
        {/* Always visible */}
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Authenticated User Links */}
        {isAuthenticated ? (
          <>
            {isAdmin ? (
              <>
                {/* Admin-Specific Links */}
                <li>
                  <Link to="/admin-dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/admin-dashboard/user-management">User Management</Link>
                </li>
                <li>
                  <Link to="/admin-dashboard/product-management">Product Management</Link>
                </li>
                <li>
                  <Link to="/admin-dashboard/order-tracking">Order Tracking</Link>
                </li>
              </>
            ) : (
              <>
                {/* Regular User Links */}
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/order-history">Order History</Link>
                </li>
              </>
            )}
            {/* Logout Button */}
            <li>
              <button onClick={logout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {/* Unauthenticated User Links */}
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
