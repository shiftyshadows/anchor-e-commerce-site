import React from "react";
import "../styles/AdminDashboard.css"; // For styling

const AdminDashboard = () => {
  // Example data for KPIs, recent activity, and orders
  const kpis = [
    { label: "Total Users", value: "1,024" },
    { label: "Active Orders", value: "78" },
    { label: "Revenue", value: "$12,345" },
    { label: "Products", value: "523" },
  ];

  const recentUsers = [
    { name: "John Doe", email: "johndoe@example.com", lastLogin: "2023-01-25", status: "Active" },
    { name: "Jane Smith", email: "janesmith@example.com", lastLogin: "2023-01-24", status: "Banned" },
  ];

  const recentOrders = [
    { id: "#12345", customer: "John Doe", date: "2023-01-25", status: "Pending" },
    { id: "#12344", customer: "Jane Smith", date: "2023-01-24", status: "Delivered" },
  ];

  const notifications = [
    "3 products are out of stock.",
    "2 orders require immediate attention.",
    "1 user report pending review.",
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>

      {/* KPI Section */}
      <section className="admin-kpis">
        {kpis.map((kpi, index) => (
          <div key={index} className="kpi">
            <h3>{kpi.label}</h3>
            <p>{kpi.value}</p>
          </div>
        ))}
      </section>

      <main className="admin-content">
        {/* Recent Activity */}
        <section className="recent-activity">
          <h2>Recent User Activity</h2>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Last Login</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.lastLogin}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Recent Orders */}
        <section className="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Notifications */}
        <section className="admin-notifications">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
