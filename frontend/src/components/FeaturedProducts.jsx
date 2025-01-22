import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import '../styles/components.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useContext(AuthContext); // Access authentication status
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/featured'); // Fetch products
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch featured products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    if (!isAuthenticated) {
      // Redirect to Sign In if the user is not authenticated
      navigate('/signin');
    } else {
      // Logic for handling product click when authenticated
      console.log(`Product clicked: ${product.name}`);
    }
  };

  if (loading) {
    return <div>Loading featured products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
