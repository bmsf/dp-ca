import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';

import './index.css';
import {
	Home,
	CheckoutPage,
	CheckoutSuccessPage,
	ContactPage,
	ProductPage,
	CartPage,
} from './pages';

function App() {
	useEffect(() => {}, []);

	// const [cartItems, setCartItems] = useState([]);

	// const [itemCount, setItemCount] = useState(0);

	// const addToCart = (item) => {
	// 	const updatedCartItems = [...cartItems, item];
	// 	const updatedItemCount = itemCount + 1;

	// 	setCartItems(updatedCartItems);
	// 	setItemCount(updatedItemCount);
	// };

	return (
		<CartProvider>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/checkout' element={<CheckoutPage />} />
				<Route
					exact
					path='/checkoutsuccess'
					element={<CheckoutSuccessPage />}
				/>
				<Route exact path='/contact' element={<ContactPage />} />
				<Route exact path='/product/:id' element={<ProductPage />} />
				<Route exact path='/cart' element={<CartPage />} />
			</Routes>
		</CartProvider>
	);
}

export default App;
