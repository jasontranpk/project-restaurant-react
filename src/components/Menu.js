import '../styles/Menu.css';
import { useState, useEffect } from 'react';
import React from 'react';

import plusIcon from '../images/cart-plus-solid.svg';
import menuData from './MenuData';
function Menu(props) {
	const menuArr = menuData;
	const [menu, setMenuData] = useState(menuArr);

	function quanOnChangeHandler(e) {
		const id = e.target.parentElement.dataset.itemid;
		let tempArr = [...menu];
		let index = tempArr.findIndex((item) => item.id === id);
		tempArr[index].quantity = Number(e.target.value);
		setMenuData(tempArr);
	}
	function addToCardOnClick(e) {
		props.addToCartClicked(e);
	}
	return (
		<main>
			<div className='menu-container'>
				<h1>Our Menu</h1>
				{menuArr.map((item) => {
					return (
						<div
							className='menu-item'
							data-itemid={item.id}
							key={item.id}
						>
							<img
								src={item.img}
								alt={item.alt}
								className='item-image'
							/>
							<p className='item-name'>{item.name}</p>
							<p className='item-price'>{item.price} VND</p>
							<input
								type='number'
								min='1'
								value={item.quantity}
								onChange={quanOnChangeHandler}
								id={item.id}
							/>
							<img
								src={plusIcon}
								alt='add-to-cart'
								className='icon svg'
								onClick={addToCardOnClick}
							/>
						</div>
					);
				})}
			</div>
		</main>
	);
}
export default Menu;
