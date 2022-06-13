import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import cartImg from '../images/cart.png';

function NavBar(props) {
	console.log(props);
	return (
		<header>
			<ul className='top-nav'>
				<Link className='nav-link' to='/'>
					<li>Home</li>
				</Link>
				<Link className='nav-link' to='/menu'>
					<li>Menu</li>
				</Link>
				<Link className='nav-link' to='/about'>
					<li>About Us</li>
				</Link>
				<Link className='nav-link' to='/cart'>
					<li className='nav-cart'>
						<img className='icon' src={cartImg} />{' '}
						<span className='cart-counter'>
							{props.total === 0 ? '' : props.total}
						</span>
					</li>
				</Link>
			</ul>
		</header>
	);
}
export default NavBar;
