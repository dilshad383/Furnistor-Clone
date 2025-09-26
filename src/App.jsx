import React from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { CartProvider } from './components/CartContext';
import LivingRoom from './components/ShopByRoom/LivingRoom';
import Bedroom from './components/ShopByRoom/Bedroom';
// ...existing code...

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/category/living-room" element={<LivingRoom />} />
  <Route path="/category/bedroom" element={<Bedroom />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App
