import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
// import signupRoutes from "./routes/auth.js"; // Adjust the path
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from the frontend origin
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true,
}));

// Middleware to parse JSON
app.use(express.json());

// API Routes
// app.use("/api/auth", signupRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Serve static files from the React app (production only)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // Catch-all route to handle React routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Default Route for Non-Production
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
