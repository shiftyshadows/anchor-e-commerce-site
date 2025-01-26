import express from "express";
import Product from "../models/Product.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const router = express.Router();

router.post("/admin/product", verifyAdmin, async (req, res) => {
    const { name, description, price, category } = req.body;

    try {
        const newProduct = new Product({ name, description, price, category });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
