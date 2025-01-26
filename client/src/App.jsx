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
import AdminDashboard from "./components/AdminDashboard"; // Admin dashboard component
import AddProduct from "./components/AddProducts"; // Add Product component
import ViewProducts from "./components/ViewProducts"; // View Products component
import EditProduct from "./components/EditProduct"; // Edit Product component
import UserDashboard from "./components/UserDashboard"; // User dashboard component
import { AuthContext } from "./context/AuthContext"; // Authentication context
import "./styles/App.css"; // Global styles

// Protected Route Wrapper
const ProtectedRoute = ({ isAdminRoute, children }) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirect to /signin if the user is not authenticated
    return <Navigate to="/signin" />;
  }

  if (isAdminRoute && !isAdmin) {
    // Redirect regular users trying to access admin-only routes
    return <Navigate to="/user-dashboard" />;
  }

  // Render the protected route if all conditions are met
  return children;
};

const App = () => {
  return (
    <div className="app">
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

        {/* Protected Routes for Users */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-history"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Routes for Admins */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute isAdminRoute={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard/product-management/add"
          element={
            <ProtectedRoute isAdminRoute={true}>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard/product-management/view"
          element={
            <ProtectedRoute isAdminRoute={true}>
              <ViewProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard/product-management/edit/:id"
          element={
            <ProtectedRoute isAdminRoute={true}>
              <EditProduct />
            </ProtectedRoute>
          }
        />

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default App;
