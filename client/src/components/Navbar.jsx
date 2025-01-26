import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Access authentication state
import "../styles/components.css"; // Import styles

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext); // Destructure auth state and logout function
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage active dropdowns

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

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
                  <Link to="/admin-dashboard/user-management">
                    User Management
                  </Link>
                </li>

                {/* Product Management Dropdown */}
                <li
                  className="dropdown"
                  onMouseEnter={() => toggleDropdown("productManagement")}
                  onMouseLeave={() => toggleDropdown("productManagement")}
                >
                  <button className="dropdown-toggle">
                    Product Management
                  </button>
                  {activeDropdown === "productManagement" && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/admin-dashboard/product-management/add">
                          Add Product
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin-dashboard/product-management/view">
                          View Products
                        </Link>
                      </li>
                    </ul>
                  )}
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
