import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // To get route params and navigate
import API from "../utils/api";
import "../styles/EditProduct.css";

const EditProduct = () => {
  const { id } = useParams(); // Get product ID from the URL
  const navigate = useNavigate(); // To redirect after delete
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    featured: false,
  });

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await API.get(`/api/products/${id}`);
      setProduct(response.data);
      setFormData(response.data);
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/api/products/${id}`, formData);
      alert("Product updated successfully!");
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/api/products/${id}`);
      alert("Product deleted successfully!");
      navigate("/view-products"); // Redirect to product listing after deletion
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="editproduct-container">
      <h1>Edit Product</h1>
      {product ? (
        <form className="editproduct-form" onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Product Description"
          ></textarea>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Product Price"
            required
          />
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            placeholder="Stock Quantity"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleInputChange}
            />
            Featured
          </label>
          <div className="button-group">
            <button type="submit" className="update-button">
              Update Product
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={handleDelete}
            >
              Delete Product
            </button>
          </div>
        </form>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default EditProduct;
