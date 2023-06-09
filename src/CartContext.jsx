import { createContext, useState, useEffect } from 'react';

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

	const clearCart = () => {
		setCartItems([]);
		setItemCount(0);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, itemCount, addToCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
