import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // To navigate between routes
import API from "../utils/api";
import { AuthContext } from "../context/AuthContext"; // Access authentication state
import "../styles/FeaturedProducts.css";
import { FaImage } from "react-icons/fa";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { isAuthenticated, isAdmin } = useContext(AuthContext); // Destructure authentication state
  const navigate = useNavigate();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await API.get(`/api/products?featured=true`); // Fetch only featured products
      setFeaturedProducts(response.data.products);
    } catch (err) {
      console.error("Error fetching featured products:", err);
    }
  };

  const handleTileClick = (product) => {
    if (!isAuthenticated) {
      navigate("/signin"); // Navigate to sign-in if unauthenticated
    } else if (isAdmin) {
      navigate(`/admin-dashboard/product-management/edit/${product.id}`); // Navigate to edit product if admin
    } else {
      navigate(`/cart?add=${product.id}`); // Add product to cart if user
    }
  };

  const getImagePath = (imageName) => {
    try {
      return require(`../images/${imageName}`);
    } catch (err) {
      return null;
    }
  };

  return (
    <div className="featuredproducts-container">
      <h1 className="featuredproducts-title">Featured Products</h1>

      <div className="products-list">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="product-tile"
            onClick={() => handleTileClick(product)} // Handle click based on authentication and role
          >
            {/* Image Section */}
            <div className="product-image-container">
              {getImagePath(product.image) ? (
                <img
                  src={getImagePath(product.image)}
                  alt={product.name}
                  className="product-image"
                />
              ) : (
                <div className="empty-picture">
                  <FaImage size={50} />
                  <p>No Image</p>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-stock">In Stock: {product.stock}</p>
              <p className="product-description">{product.description || "No description available."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
