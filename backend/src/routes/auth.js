import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js"; // Adjust the path based on your project structure
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key'; // Use env variable

// Signup route
router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Validate input
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Check if this is the first user and make them admin
    const isFirstUser = (await User.countDocuments()) === 0;

    // Create the user
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      isAdmin: isFirstUser, // Grant admin access to the first user
    });

    await newUser.save();

    // Send response
    res.status(201).json({
      message: "User registered successfully.",
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// POST: /api/auth/signin
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, SECRET_KEY, {
      expiresIn: '1h',
    });

    // Send token as a cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure cookies in production
    });

    // Respond with user role
    res.status(200).json({ isAdmin: user.isAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});
export default router;
