import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaImage } from "react-icons/fa"; // Icons for empty state and fallback image
import API from "../utils/api"; // Axios instance for API calls
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate total amount for the cart
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Buy Button Click
  const handleBuy = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to your cart before buying.");
      return;
    }

    try {
      const orderDetails = {
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        total: cartTotal,
      };

      const response = await API.post("/api/orders", orderDetails);

      // Clear the cart after successful order placement
      clearCart();
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const getImagePath = (image) => {
    try {
      // Return image path or fallback to null
      return image ? require(`../images/${image}`) : null;
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <FaShoppingCart size={80} color="#ccc" />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {getImagePath(item.image) ? (
                    <img
                      src={getImagePath(item.image)}
                      alt={item.name}
                      className="item-image"
                    />
                  ) : (
                    <div className="fallback-image">
                      <FaImage size={50} color="#ccc" />
                    </div>
                  )}
                </div>
                <div className="item-details">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">
                    ${item.price.toFixed(2)} x {item.quantity} ={" "}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total Amount:</h3>
            <p className="total-price">${cartTotal.toFixed(2)}</p>
            <button className="buy-button" onClick={handleBuy}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
