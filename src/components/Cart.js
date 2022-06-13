import menuData from './MenuData';
import { useState, useEffect } from 'react';
import '../styles/Cart.css';

function Cart(props) {
	const menuArr = menuData;
	const [itemsOnCart, setItemsOncart] = useState(props.ShoppingCart);
	function inputOnChangeHandler(e) {
		const id = e.target.parentElement.dataset.itemid;
		let tempArr = [...itemsOnCart];
		let index = tempArr.findIndex((item) => item.id === id);
		tempArr[index].quan = Number(e.target.value);
		setItemsOncart(tempArr);
	}
	function updateOnClick() {
		props.updateCartClicked(itemsOnCart);
	}
	let total = 0;
	return (
		<div className='menu-container'>
			<h1>Your Shopping Cart</h1>
			{itemsOnCart.map((item) => {
				const index = menuArr.findIndex((i) => i.id === item.id);

				const itemTotal = item.quan * menuArr[index].price;
				total += itemTotal;
				return (
					<div
						className='menu-item'
						data-itemid={item.id}
						key={item.id}
					>
						<img
							src={menuArr[index].img}
							alt={item.alt}
							className='item-image'
						/>
						<p className='item-name'>{menuArr[index].name}</p>
						<p className='item-price'>{menuArr[index].price} VND</p>
						<input
							type='number'
							min='1'
							value={item.quan}
							id={item.id}
							onChange={inputOnChangeHandler}
						/>
						<p className='item-total'>{itemTotal} VND</p>
					</div>
				);
			})}
			<input type='button' value='Update Cart' onClick={updateOnClick} />
			<p>Total: {total} </p>
		</div>
	);
}
export default Cart;
