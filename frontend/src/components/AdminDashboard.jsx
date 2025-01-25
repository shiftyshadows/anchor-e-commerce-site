import React from "react";
import "../styles/AdminDashboard.css"; // Optional: for styling

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="admin-content">
        <section className="dashboard-section">
          <h2>User Management</h2>
          <p>Manage users, view profiles, and adjust permissions.</p>
          <button className="admin-btn">View Users</button>
        </section>
        <section className="dashboard-section">
          <h2>Product Management</h2>
          <p>Manage products, add new items, and update inventory.</p>
          <button className="admin-btn">Manage Products</button>
        </section>
        <section className="dashboard-section">
          <h2>Order Tracking</h2>
          <p>Track and manage customer orders.</p>
          <button className="admin-btn">View Orders</button>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
