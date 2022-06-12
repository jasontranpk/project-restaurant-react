import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/menu' element={<Menu />}></Route>
					<Route path='/aboutus' element={<AboutUs />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
