import React from 'react';
import '../styles/components.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
    </div>
  );
};

export default ProductCard;
