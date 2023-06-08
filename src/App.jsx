import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import {
	Home,
	CheckoutPage,
	CheckoutSuccessPage,
	ContactPage,
	ProductPage,
} from './pages';

function App() {
	useEffect(() => {}, []);

	return (
		<>
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
			</Routes>
		</>
	);
}

export default App;
