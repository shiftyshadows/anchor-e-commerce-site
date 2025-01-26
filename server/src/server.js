import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import { fileURLToPath } from "url";

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware: Allow requests from the frontend origin
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Frontend URL
    credentials: true, // Allow cookies and headers
  })
);

// Middleware: Parse JSON and Cookies
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/products", productRoutes); // Product routes

// Serve static files for production
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // Catch-all route to serve React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  // Default route for non-production environments
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
