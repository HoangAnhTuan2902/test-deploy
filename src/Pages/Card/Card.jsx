import { useEffect, useState } from 'react';
import { getAllCart } from '../../apiService/apiService';
import Product from '../../components/Product/Product';

import './Card.scss';
import Navigation from '../../components/Navigation/Navigation';
function Car() {
	const [cart, setCart] = useState([]);
	const isCart = true;

	useEffect(() => {
		fetchAllCart();
	}, []);
	const fetchAllCart = async () => {
		const prodCart = await getAllCart();
		setCart(prodCart);
	};
	return (
		<div className='Cart'>
			<Navigation />
			<div className='product-cart'>
				{cart.map((product) => (
					<Product
						isCart={isCart}
						key={product.id}
						id={product.id}
						name={product.title}
						image={product.image}
						price={product.price}
						discountPrice={product.discountPrice}
						previewStar={product.preriewStar}
						totalReviews={product.totalReviews}
						endow={product.endow}
					/>
				))}
			</div>
		</div>
	);
}

export default Car;
