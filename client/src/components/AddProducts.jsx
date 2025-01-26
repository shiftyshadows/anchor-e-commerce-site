import React, { useState } from "react";
import API from "../utils/api"; // Import the configured API instance
import "../styles/AddProduct.css"; // Import the CSS file

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    featured: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.price || !formData.stock || !formData.image) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    }

    try {
      // Make POST request to the server
      const response = await API.post("/api/products", formData);
      setSuccess(`Product added successfully: ${response.data.name}`);
      setError("");

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        featured: false,
      });
    } catch (err) {
      setError("Failed to add product. Please try again.");
      setSuccess("");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      image: "",
      featured: false,
    });
    setError("");
    setSuccess("");
  };

  return (
    <div className="addproduct-container">
      <div className="addproduct-card">
        <h1 className="addproduct-title">Add New Product</h1>

        {error && <p className="addproduct-error">{error}</p>}
        {success && <p className="addproduct-success">{success}</p>}

        <form className="addproduct-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (Ksh)*</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock Quantity*</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="Enter stock quantity"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL*</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleInputChange}
            />
            <label htmlFor="featured">Featured Product</label>
          </div>

          <button type="submit" className="addproduct-button">
            Add Product
          </button>
          <button type="button" className="reset-button" onClick={resetForm}>
            Reset Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
