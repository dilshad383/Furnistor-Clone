
import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	// Load cart from localStorage on mount
	const [cart, setCart] = useState(() => {
		const stored = localStorage.getItem("cart");
		return stored ? JSON.parse(stored) : [];
	});

	// Save cart to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (item) => {
		setCart((prev) => {
			// Check if item already exists (by title)
			const idx = prev.findIndex((i) => i.title === item.title);
			if (idx !== -1) {
				// If exists, increment quantity
				return prev.map((i, index) =>
					index === idx ? { ...i, quantity: (i.quantity || 1) + 1 } : i
				);
			}
			// If not, add with quantity 1
			return [...prev, { ...item, quantity: 1 }];
		});
	};

	const updateQuantity = (index, newQuantity) => {
		setCart((prev) =>
			prev.map((item, i) =>
				i === index ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	const removeFromCart = (index) =>
		setCart((prev) => prev.filter((_, i) => i !== index));

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
