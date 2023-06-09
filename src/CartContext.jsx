import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [itemCount, setItemCount] = useState(0);

	const addToCart = (item) => {
		const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
		const updatedItemCount = itemCount + 1;

		setCartItems(updatedCartItems);
		setItemCount(updatedItemCount);
	};

	return (
		<CartContext.Provider value={{ cartItems, itemCount, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
