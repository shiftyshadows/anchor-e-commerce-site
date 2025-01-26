import express from "express";
import { createOrder, getOrdersByUser, getOrders } from "../controllers/orderController.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyAdmin from "../middlewares/verifyAdmin.js"; // Middleware to check admin role

const router = express.Router();

// POST /api/orders - Create a new order
router.post("/", verifyToken, createOrder);

// GET /api/orders/user - Fetch orders for a specific user
router.get("/user", verifyToken, getOrdersByUser);

// GET /api/orders - Retrieve all orders for admin
router.get("/", verifyToken, verifyAdmin, getOrders);

export default router;
