import React, { useState, useEffect } from "react";
import API from "../utils/api"; // Axios instance for API calls
import "../styles/AdminOrderTracking.css";

const AdminOrderTracking = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch orders from the server
  const fetchOrders = async (page = 1) => {
    try {
      setLoading(true);
      setError(null); // Clear previous errors
      const response = await API.get("/api/orders", {
        params: { page, limit: 10 }, // Pagination parameters
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Admin token
        },
      });

      setOrders(response.data.orders); // Update orders state
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle status update
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      setUpdating(true);
      await API.patch(`/api/orders/${orderId}`, { status: newStatus }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Admin token
        },
      });

      alert("Order status updated successfully!");

      // Refresh the order list after the update
      fetchOrders(currentPage);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update order status.");
      console.error("Update order status error:", err);
    } finally {
      setUpdating(false);
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  // Handle pagination
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      fetchOrders(newPage);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-order-tracking">
      <h2>Order Tracking</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order-card">
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

              {/* Update Status Buttons */}
              <div className="status-buttons">
                {order.status === "New" && (
                  <button
                    onClick={() => updateOrderStatus(order._id, "Shipped")}
                    disabled={updating} // Disable while updating
                  >
                    Mark as Shipped
                  </button>
                )}
                {order.status === "Shipped" && (
                  <button
                    onClick={() => updateOrderStatus(order._id, "Delivered")}
                    disabled={updating} // Disable while updating
                  >
                    Mark as Delivered
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderTracking;
