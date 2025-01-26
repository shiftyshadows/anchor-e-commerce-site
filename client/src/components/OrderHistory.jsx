import React, { useEffect, useState } from "react";
import API from "../utils/api";
import "../styles/OrderHistory.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user-specific orders
        const response = await API.get("/api/orders/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token for user authentication
          },
        });

        setOrders(response.data); // Store orders in state
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const markAsDelivered = async (orderId) => {
    try {
      await API.patch(`/api/orders/${orderId}`, { status: "Delivered" }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Order marked as Delivered!");
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: "Delivered" } : order
        )
      );
    } catch (err) {
      console.error("Failed to update order status:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to mark order as Delivered.");
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <h4>Order ID: {order._id}</h4>
              <p>Status: <strong>{order.status}</strong></p>
              <p>Total: ${order.total.toFixed(2)}</p>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
              <h5>Items:</h5>
              <ul>
                {order.items.map((item) => (
                  <li key={item._id}>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                  </li>
                ))}
              </ul>

              {/* Mark as Delivered Button */}
              {order.status === "Shipped" && (
                <button
                  className="mark-as-delivered-button"
                  onClick={() => markAsDelivered(order._id)}
                >
                  Mark as Delivered
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
