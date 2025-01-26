import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../utils/api";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ITEMS_PER_PAGE = 10; // Number of items per page
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await API.get(
        `/api/products?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
      );
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const handleAddToCart = (product) => {
    const quantity = parseInt(quantities[product.id] || 1, 10);
    addToCart(product, quantity);
  };

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome to your dashboard! Here you can manage your account, view orders, and explore more features.</p>

      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-tile">
            <div className="product-image-container">
              <img
                src={`/images/${product.image || "default.jpg"}`}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-description">{product.description || "No description available."}</p>
            </div>
            <div className="product-actions">
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                className="quantity-input"
              />
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
