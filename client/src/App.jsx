import React, { Suspense, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContext } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary"; // Error boundary for graceful error handling
import "./styles/App.css";

// Lazy-loaded components
const Intro = React.lazy(() => import("./components/Intro"));
const FeaturedProducts = React.lazy(() => import("./components/FeaturedProducts"));
const About = React.lazy(() => import("./components/About"));
const SignUp = React.lazy(() => import("./components/SignUp"));
const SignIn = React.lazy(() => import("./components/SignIn"));
const Cart = React.lazy(() => import("./components/Cart"));
const OrderHistory = React.lazy(() => import("./components/OrderHistory"));
const AdminDashboard = React.lazy(() => import("./components/AdminDashboard"));
const AddProduct = React.lazy(() => import("./components/AddProducts"));
const ViewProducts = React.lazy(() => import("./components/ViewProducts"));
const EditProduct = React.lazy(() => import("./components/EditProduct"));
const UserDashboard = React.lazy(() => import("./components/UserDashboard"));

// Protected Route Wrapper
const ProtectedRoute = ({ isAdminRoute, children }) => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to="/user-dashboard" />;
  }

  return children;
};

// Dynamic Title Update
const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | Anchor E-Commerce` : "Anchor E-Commerce";
  }, [title]);
};

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <ErrorBoundary>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  {useDynamicTitle("Home")}
                  <Intro />
                  <FeaturedProducts />
                  <About />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  {useDynamicTitle("Sign Up")}
                  <SignUp />
                </>
              }
            />
            <Route
              path="/signin"
              element={
                <>
                  {useDynamicTitle("Sign In")}
                  <SignIn />
                </>
              }
            />

            {/* Protected Routes for Users */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  {useDynamicTitle("Your Cart")}
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order-history"
              element={
                <ProtectedRoute>
                  {useDynamicTitle("Order History")}
                  <OrderHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRoute>
                  {useDynamicTitle("User Dashboard")}
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected Routes for Admins */}
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute isAdminRoute={true}>
                  {useDynamicTitle("Admin Dashboard")}
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/product-management/add"
              element={
                <ProtectedRoute isAdminRoute={true}>
                  {useDynamicTitle("Add Product")}
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/product-management/view"
              element={
                <ProtectedRoute isAdminRoute={true}>
                  {useDynamicTitle("View Products")}
                  <ViewProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/product-management/edit/:id"
              element={
                <ProtectedRoute isAdminRoute={true}>
                  {useDynamicTitle("Edit Product")}
                  <EditProduct />
                </ProtectedRoute>
              }
            />

            {/* Catch-All Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default App;
