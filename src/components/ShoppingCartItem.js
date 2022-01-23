import React from "react"
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../cartSlice.js"

export default function ShoppingCartItem(props) {
	const dispatch = useDispatch();
	return (
		<div className="flex flex-row items-center h-20 pb-2 mx-5 bg-white rounded cart-item-container">
			<section className="w-3/12 pl-3">
				<img href={props.itemImage} alt="product"/>
			</section>
			<section className="w-4/12">
				<a href={`/productpage?itemId=${props.itemId}`}>{props.itemName}</a>
			</section>
			<section className="w-2/12">
				<p>qty: {props.itemQuantity}</p>
			</section>
			<section className="w-3/12">
				<button className="w-auto p-2 border-black h-14 hover:bg-grey cart-remove-button"
				type="button" 
				onClick={() => dispatch(removeItemFromCart(props.itemId))}>
				Remove item</button>
			</section>
		</div>
	);
}