import Navigation from '../../components/Navigation/Navigation';
import Products from '../../components/Products/Products';
import SideNav from '../../components/SideNav/SideNav';
import SlideShow from '../../components/SlideShow/SlideShow';
import './Home.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
	var settings = {
		accessibility: false, // Đảm bảo rằng accessibility được bật
		arrows: false, // Hiển thị mũi tên điều hướng
		dots: true, // Hiển thị các dấu chấm điều hướng
		infinite: false, // Cho phép cuộn vô hạn
		speed: 500, // Tốc độ chuyển đổi giữa các slide
		slidesToShow: 1, // Số slide hiển thị cùng lúc
		slidesToScroll: 1, // Số slide cuộn mỗi lần
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
						<ul className='language'>English</ul>
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
