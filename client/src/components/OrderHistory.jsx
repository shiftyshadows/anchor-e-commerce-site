import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => setOrders(response.data))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="order-history">
      <h2>Your Orders</h2>
      {orders.map(order => (
        <div key={order.id} className="order">
          <h4>Order ID: {order.id}</h4>
          <p>Total: ${order.total}</p>
          <p>Date: {new Date(order.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
