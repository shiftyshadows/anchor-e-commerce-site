import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000", // Default base URL
  timeout: 10000, // Optional: Set a timeout for requests (in milliseconds)
});

// Optional: Add default headers
API.defaults.headers.common["Content-Type"] = "application/json";

// Optional: Add interceptors (for logging, token handling, etc.)
API.interceptors.request.use(
  (config) => {
    // Example: Add a token to headers if it exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response error
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default API;
