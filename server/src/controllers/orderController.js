import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, total } = req.body;

    // Validate request payload
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Invalid or empty items list." });
    }

    if (!total || typeof total !== "number") {
      return res.status(400).json({ message: "Invalid total amount." });
    }

    // Ensure `userId` is attached to the order
    const newOrder = new Order({
      userId: req.user.id, // Extracted from token by verifyToken middleware
      items,
      total,
      date: new Date(),
    });

    await newOrder.save();

    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (err) {
    console.error("Order creation failed:", err.message);
    res.status(500).json({ error: "Failed to create order." });
  }
};

// Fetch all orders with sorting and pagination
export const getOrders = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Pagination query parameters

    // Sorting by status: "New" → "Shipped" → "Delivered"
    const sortByStatus = {
      New: 1,
      Shipped: 2,
      Delivered: 3,
    };

    const orders = await Order.find()
      .sort({
        status: {
          $function: {
            body: function (status) {
              return sortByStatus[status] || 99; // Sort "unknown" statuses last
            },
            args: ["$status"],
            lang: "js",
          },
        },
        date: -1, // Secondary sort by date
      })
      .skip((page - 1) * limit) // Pagination: Skip previous pages
      .limit(Number(limit)); // Limit results to page size

    const totalOrders = await Order.countDocuments(); // Total orders count for pagination

    res.status(200).json({
      orders,
      currentPage: Number(page),
      totalPages: Math.ceil(totalOrders / limit),
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all orders." });
  }
};

// Fetch orders for the logged-in user
export const getOrdersByUser = async (req, res) => {
  try {
    const userId = req.user.id; // User ID extracted from token
    const orders = await Order.find({ userId }).sort({ date: -1 }); // Sort by date (latest first)
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user orders." });
  }
};
