import { HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi';
import Product from '../Product/Product';
import { useEffect, useRef, useState } from 'react';
import { getAllProducts, postAddToCart } from '../../apiService/apiService';
import { toast } from 'react-toastify';
import './Products.scss';

import Slider from 'react-slick';

function Products() {
	const [time, setTime] = useState(100000);
	const [products, setProducts] = useState([]);
	const productRef = useRef(null);

	function secondsToDhms(seconds) {
		seconds = Number(seconds);
		let d = Math.floor(seconds / (3600 * 24));
		let h = Math.floor((seconds % (3600 * 24)) / 3600);
		let m = Math.floor((seconds % 3600) / 60);
		let s = Math.floor(seconds % 60);

		let dDisplay = d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '';
		let hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
		let mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
		let sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
		return dDisplay + hDisplay + mDisplay + sDisplay;
	}

	const [days, hours, minutes, seconds] = secondsToDhms(time).trim().split(',');

	useEffect(() => {
		if (time === 0) return;
		const countDown = setInterval(() => {
			setTime(time - 1);
		}, 1000);

		return () => clearInterval(countDown);
	}, [time]);

	let dayNumber = days.trim().split(' ')[0];
	let hourNumber = hours.trim().split(' ')[0];
	let minuteNumber = minutes.trim().split(' ')[0];
	let secondNumber = seconds.trim().split(' ')[0];

	useEffect(() => {
		fetchAllProducts();
	}, []);

	const fetchAllProducts = async () => {
		const prod = await getAllProducts();
		setProducts(prod);
	};

	const addToCart = async (id) => {
		const productAddToCart = products.find((product) => {
			return product.id === id;
		});
		await postAddToCart(productAddToCart);
		toast.success('Product added to cart');
	};

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		slickNext: true,
	};

	const sliderRef = useRef(null);

	const goToNext = () => {
		sliderRef.current.slickNext();
	};
	const goToPrev = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<div className='products-page'>
			<div className='sale-timer'>
				<div className='day'>
					<span className='box'>
						<p>Today`s</p>
					</span>
				</div>

				<div className='count-down'>
					<div className='timer'>
						<p className='title'>Flash Sales</p>
						<span>
							<p className='content'>Days</p>
							<p className='time'>{dayNumber}</p>
						</span>
						<p className='two-dots'>:</p>
						<span>
							<p className='content'>Hours</p>
							<p className='time'>{hourNumber}</p>
						</span>
						<p className='two-dots'>:</p>
						<span>
							<p className='content'>Minutes</p>
							<p className='time'>{minuteNumber}</p>
						</span>
						<p className='two-dots'>:</p>
						<span>
							<p className='content'>Seconds</p>
							<p className='time'>{secondNumber}</p>
						</span>
					</div>
					<div className='scroll-btn'>
						<button
							onClick={goToPrev}
							className='btn'>
							<HiArrowLeft />
						</button>

						<button
							onClick={goToNext}
							className='btn'>
							<HiArrowRight />
						</button>
					</div>
				</div>
			</div>
			<div
				ref={productRef}
				className='product-item'>
				<Slider
					ref={sliderRef}
					{...settings}>
					{products.map((product) => {
						return (
							<Product
								addToCart={addToCart}
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
						);
					})}
				</Slider>
			</div>
		</div>
	);
}

export default Products;
