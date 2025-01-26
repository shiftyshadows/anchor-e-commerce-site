import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext"; // Authentication context provider
import { CartProvider } from "./context/CartContext"; // Cart context provider
import App from "./App"; // Main App component
import "./styles/App.css"; // Global styles

// Define your router with routes
const router = createBrowserRouter([
  {
    path: "*", // Catch-all route
    element: <App />, // Main App component
  },
]);

// Mount the React application to the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
