import React from 'react';
import ProductCard from './ProductCard';
import '../styles/components.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', description: 'High performance laptop.' },
    { id: 2, name: 'Monitor', price: '$199', description: '4K UHD monitor.' },
    { id: 3, name: 'Keyboard', price: '$49', description: 'Mechanical keyboard.' },
    { id: 4, name: 'Mouse', price: '$25', description: 'Wireless mouse.' },
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
