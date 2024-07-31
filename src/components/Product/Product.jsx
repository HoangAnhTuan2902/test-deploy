import PropTypes from 'prop-types';
import './Product.scss';
import YellowStar from '../../assets/svg/yellow-star.svg';
import Like from '../../assets/svg/like.svg';
import Eye from '../../assets/svg/eye.svg';
function Product(props) {
	const { id, name, image, price, discountPrice, totalReviews, endow, addToCart, isCart } = props;

	const handleAddToCart = () => {
		addToCart(id);
	};
	return (
		<div className='product-page'>
			<div className='carts'>
				<div className='cart-item'>
					<div className='img'>
						<img
							src={image}
							alt=''
						/>
						<div className='endow'>{endow}%</div>
						<div className='interact'>
							<div className='interact-item like'>
								<img
									src={Like}
									alt=''
								/>
							</div>
							<div className='interact-item view'>
								<img
									src={Eye}
									alt=''
								/>
							</div>
						</div>
						{!isCart && (
							<button
								onClick={() => handleAddToCart()}
								className='add-btn'>
								Add To Cart
							</button>
						)}
					</div>

					<div className='content'>
						<div className='name'>{name}</div>
						<div className='prices'>
							<div className='price'>${price}</div>
							<div className='price-discount'>${discountPrice}</div>
						</div>
						<div className='product-reviews'>
							<div className='previews-star'>
								<img
									src={YellowStar}
									alt=''
								/>
								<img
									src={YellowStar}
									alt=''
								/>
							</div>
							<div className='total-previews'>({totalReviews})</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	discountPrice: PropTypes.number.isRequired,
	totalReviews: PropTypes.number.isRequired,
	endow: PropTypes.number.isRequired,
	addToCart: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	isCart: PropTypes.bool,
};

export default Product;
