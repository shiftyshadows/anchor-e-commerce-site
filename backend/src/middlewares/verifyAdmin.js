import jwt from "jsonwebtoken";

const verifyAdmin = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ message: "No token provided" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });

        if (!decoded.isAdmin) {
            return res
                .status(403)
                .json({ message: "Admin privileges required" });
        }

        req.userId = decoded.id;
        next();
    });
};

export default verifyAdmin;
