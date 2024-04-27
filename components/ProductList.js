import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ProductList;
