import React, { useState } from "react";
import CartContext from "../components/CartContext";
import { Link } from "react-router-dom";

const Products = ({ children }) => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 200 },
    { id: 2, name: "Product 2", price: 300 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <nav>
        <Link to="/cart">Go to Cart ({cart.length})</Link>
      </nav>

      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}

      {children}
    </CartContext.Provider>
  );
};

export default Products;
