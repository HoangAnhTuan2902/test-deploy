import axios from 'axios';

const API_URL = 'http://localhost:3001';

const getAllProducts = () =>
	axios.get(`${API_URL}/products`).then(function (response) {
		// handle success
		return response.data;
	});

const getAllCart = () =>
	axios.get(`${API_URL}/cart`).then(function (response) {
		// handle success
		return response.data;
	});

const postAddToCart = (productAddToCart) =>
	axios
		.post(`${API_URL}/cart`, {
			...productAddToCart,
			quantity: 1,
		})
		.then(function (response) {
			// handle success
			return response.data;
		});

export { getAllProducts, getAllCart, postAddToCart };
