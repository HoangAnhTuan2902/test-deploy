import './SideNav.scss';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
function SideNav() {
	return (
		<div className='side-nav'>
			<ul>
				<li>
					Woman`s Fashion{' '}
					<img
						src={ArrowLeft}
						alt=''
					/>
				</li>
				<li>
					Men`s Fashion{' '}
					<img
						src={ArrowLeft}
						alt=''
					/>
				</li>
				<li>Electronics</li>
				<li>home $ lifestyle</li>
				<li>Medicine</li>
				<li>Sports & Outdoor</li>
				<li>Baby`s Toys</li>
				<li>Groseries & pets</li>
				<li>Health & Beauty</li>
			</ul>
		</div>
	);
}

export default SideNav;
