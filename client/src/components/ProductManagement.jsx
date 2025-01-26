import React, { useState, useEffect } from "react";
import API from "../utils/api"; // Import the API instance
import "../styles/AdminDashboard.css"; // Stylesheet

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    featured: false,
    image: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  // Fetch products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await API.put(`/products/${editProductId}`, formData);
      } else {
        await API.post("/products", formData);
      }
      fetchProducts();
      resetForm();
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  const handleEdit = (product) => {
    setEditMode(true);
    setEditProductId(product.id);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      featured: product.featured,
      image: product.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const resetForm = () => {
    setEditMode(false);
    setEditProductId(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      featured: false,
      image: "",
    });
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={formData.stock}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleInputChange}
          />
          Featured Product
        </label>
        <button type="submit" className="admin-btn">
          {editMode ? "Update Product" : "Add Product"}
        </button>
        {editMode && (
          <button type="button" className="admin-btn" onClick={resetForm}>
            Cancel Edit
          </button>
        )}
      </form>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            <div className="actions">
              <button
                className="admin-btn"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button
                className="admin-btn delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
