import Search from '../../assets/svg/search.svg';
import Heart from '../../assets/svg/heart.svg';
import Cart from '../../assets/svg/cart.svg';

import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
	return (
		<>
			<div className='navigation'>
				<p className='title'>Exclusive</p>
				<ul className='nav-bar'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>Contact</li>
					<li>About</li>
					<li>Sign Up</li>
				</ul>
				<div className='search'>
					<form className='input-form'>
						<input
							type='text'
							placeholder='What are you looking for'
						/>
						<img
							src={Search}
							alt=''
						/>
					</form>
					<img
						src={Heart}
						alt=''
					/>
					<Link to={'card'}>
						<img
							src={Cart}
							alt=''
						/>{' '}
					</Link>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Navigation;
