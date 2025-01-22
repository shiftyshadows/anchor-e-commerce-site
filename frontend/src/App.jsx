import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navigation bar
import Intro from './components/Intro'; // Intro section
import FeaturedProducts from './components/FeaturedProducts'; // Featured products section
import About from './components/About'; // About section
import Footer from './components/Footer'; // Footer section
import SignupPage from './pages/SignupPage'; // Sign-up page
import SigninPage from './pages/SigninPage'; // Sign-in page
import Cart from './components/Cart'; // Cart page
import OrderHistory from './components/OrderHistory'; // Order history page
import { AuthContext } from './context/AuthContext'; // Authentication context
import './styles/App.css'; // Global styles

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
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />

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
      </Routes>
    </div>
  );
};

export default App;
