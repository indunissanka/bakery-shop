import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-sku">SKU: {product.sku}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-availability">
          Available: {product.available_from} to {product.available_to}
        </p>
        <p className="product-quantity">
          Quantity: {product.quantity}
        </p>
        <p className="product-delivery">
          Delivery Date: {product.delivery_date}
        </p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
