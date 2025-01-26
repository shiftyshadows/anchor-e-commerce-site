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
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <h4>Order ID: {order.id}</h4>
              <p>Total: ${order.total.toFixed(2)}</p>
              <p>Date: {new Date(order.date).toLocaleString()}</p>
              <h5>Items:</h5>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
