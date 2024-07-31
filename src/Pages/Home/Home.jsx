import Navigation from '../../components/Navigation/Navigation';
import Products from '../../components/Products/Products';
import SideNav from '../../components/SideNav/SideNav';
import SlideShow from '../../components/SlideShow/SlideShow';
import './Home.scss';
import { IoIosArrowDown } from 'react-icons/io';

import Slider from 'react-slick';

function Home() {
	const settings = {
		accessibility: false,
		arrows: false,
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className='home'>
			<div className='header'>
				<div className='top-header'>
					<div className='desc'>
						<span>
							<p className='sale-off'>
								Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
							</p>
							<p className='shop-now'>ShopNow</p>
						</span>
						<ul className='language'>
							<p>English</p> <IoIosArrowDown />
						</ul>
					</div>
				</div>
				<Navigation />
				<div className='nav-container'>
					<div className='left'>
						<SideNav />
						<div className='line'></div>
					</div>
					<div className='right'>
						<Slider {...settings}>
							<SlideShow />
						</Slider>
					</div>
				</div>
			</div>
			<div className='products'>
				<Products />
			</div>
		</div>
	);
}

export default Home;
