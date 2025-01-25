import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Read token from cookies
  if (!token) {
    return res.status(401).json({ message: "Authentication required." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Decode token
    req.user = decoded; // Attach decoded payload to request
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token." });
  }
};

export default verifyToken;
