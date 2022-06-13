import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import { useState } from 'react';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

function App() {
	const [cart, setCart] = useState([]);
	function cartHandler(cartMenu) {
		setCart(cartMenu);
	}
	function sumCart() {
		let totalQuan = 0;
		if (cart.length > 0) {
			totalQuan = cart.reduce((sum, cur) => sum + Number(cur.quan), 0);
		}
		return totalQuan;
	}
	function addToCartHandler(e) {
		const id = e.target.parentElement.dataset.itemid;
		const quantity = Number(document.getElementById(id).value);
		let tempCartArr = [...cart];
		let index = tempCartArr.findIndex((item) => item.id === id);

		if (index === -1) {
			const item = {};
			item.id = id;
			item.quan = Number(quantity);
			tempCartArr.push(item);
		} else {
			tempCartArr[index].quan =
				tempCartArr[index].quan + Number(quantity);
		}
		setCart(tempCartArr);
	}
	function updateCardHandler(c) {
		setCart(c);
	}
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar total={sumCart()} />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route
						path='/menu'
						element={
							<Menu
								cartMenu={cart}
								cartOnChange={cartHandler}
								addToCartClicked={addToCartHandler}
							/>
						}
					></Route>
					<Route path='/about' element={<AboutUs />}></Route>
					<Route
						path='/cart'
						element={
							<Cart
								ShoppingCart={cart}
								updateCartClicked={updateCardHandler}
							/>
						}
					></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
