import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import cartImg from '../images/cart.png';

function NavBar() {
	return (
		<header>
			<ul className='top-nav'>
				<Link className='nav-link' to='/'>
					<li>Home</li>
				</Link>
				<Link className='nav-link' to='/menu'>
					<li>Menu</li>
				</Link>
				<Link className='nav-link' to='/aboutus'>
					<li>About Us</li>
				</Link>
				<Link className='nav-link' to='/cart'>
					<li className='icon'>
						<img src={cartImg} />
					</li>
				</Link>
			</ul>
		</header>
	);
}
export default NavBar;
