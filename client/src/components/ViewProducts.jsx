import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import API from "../utils/api"; // Import the configured API instance
import "../styles/ViewProducts.css"; // Import the CSS file
import { FaImage } from "react-icons/fa"; // Import the empty picture icon

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await API.get(`/api/products?page=${currentPage}&limit=${ITEMS_PER_PAGE}`);
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const getImagePath = (imageName) => {
    try {
      // Dynamically require the image
      return require(`../images/${imageName}`);
    } catch (err) {
      // Return null if image not found
      return null;
    }
  };

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const navigateToEditProduct = (id) => {
    navigate(`/products/edit/${id}`); // Redirect to EditProduct page with the product ID
  };

  return (
    <div className="viewproducts-container">
      <h1 className="viewproducts-title">Products</h1>

      <div className="products-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-tile"
            onClick={() => navigateToEditProduct(product.id)} // Navigate on click
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

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewProducts;
