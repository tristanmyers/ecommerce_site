import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../cartSlice.js"

// TODO: rerender after item has been removed
export default function ShoppingCartItem(props) {
	const dispatch = useDispatch();
	return (
		<div className="flex flex-row gap-4 pb-2 bg-white rounded cart-item-container h-1/3">
			<div className="flex flex-row items-center gap-5 px-2 py-4">
				<img href={`${props.itemImage}`} alt="product"/>
				<p>{props.itemName}</p>
				<p>{props.itemQuantity}</p>
			</div>
			<div className="flex flex-row items-center">
				<button className="p-2 border border-black hover:bg-grey cart-remove-button"
				type="button" 
				onClick={() => dispatch(removeItemFromCart(props.itemId))}>
				Remove item</button>
			</div>
		</div>
	);
}