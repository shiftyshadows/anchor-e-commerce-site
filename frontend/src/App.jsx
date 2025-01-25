import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation bar
import Intro from "./components/Intro"; // Intro section
import FeaturedProducts from "./components/FeaturedProducts"; // Featured products section
import About from "./components/About"; // About section
import Footer from "./components/Footer"; // Footer section
import SignUp from "./components/SignUp"; // Sign-up component
import SignIn from "./components/SignIn"; // Sign-in component
import Cart from "./components/Cart"; // Cart page
import OrderHistory from "./components/OrderHistory"; // Order history page
import { AuthContext } from "./context/AuthContext"; // Authentication context
import "./styles/App.css"; // Global styles

const App = () => {
  const { isAuthenticated } = useContext(AuthContext); // Check if user is authenticated

  return (
    <div>
      {/* Navbar always visible */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Intro />
              <FeaturedProducts />
              <About />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </>
        ) : (
          <>
            {/* Redirect unauthenticated users to /signin */}
            <Route path="/cart" element={<Navigate to="/signin" />} />
            <Route path="/order-history" element={<Navigate to="/signin" />} />
          </>
        )}

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default App;
