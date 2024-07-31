import Apple from '../../assets/img/apple.png';
import Ip14 from '../../assets/img/ip-14.png';
import IconLeft from '../../assets/svg/icon-left.svg';
import './SlideShow.scss';

function SlideShow() {
	return (
		// <div className='slide-show'>
		<div className='image-show'>
			<div className='content'>
				<div className='logo'>
					<img
						src={Apple}
						alt=''
					/>
					<p className='phone-name'>Iphone 14 Series</p>
				</div>
				<div className='voucher'>Up to 10% off Voucher</div>
				<button className='shop-btn'>
					<p>Shop Now</p>
					<img
						src={IconLeft}
						alt=''
					/>
				</button>
			</div>
			<div className='img'>
				<img
					src={Ip14}
					alt=''
				/>
			</div>
			{/* </div> */}
			{/* <div className='dots'>
				<div className='dot'> </div>
				<div className='dot'> </div>
				<div className='dot active'> </div>
				<div className='dot'> </div>
				<div className='dot'> </div>
			</div> */}
		</div>
	);
}

export default SlideShow;
