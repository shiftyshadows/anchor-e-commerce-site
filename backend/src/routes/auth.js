// routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if any users already exist
        const existingUsers = await User.countDocuments();

        // First signup becomes admin
        const isAdmin = existingUsers === 0;

        // Create new user
        const newUser = new User({ email, password, isAdmin });
        await newUser.save();

        res.status(201).json({ message: "Signup successful", isAdmin });
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});

export default router;
