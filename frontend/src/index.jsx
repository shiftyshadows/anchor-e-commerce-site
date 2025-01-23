import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Global authentication state
import App from './App'; // Main app component
import './styles/App.css'; // Global styles

// Define your router with routes
const router = createBrowserRouter(
  [
    {
      path: '*', // Parent route now includes a trailing '*'
      element: <App />, // Main App component as the root
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
