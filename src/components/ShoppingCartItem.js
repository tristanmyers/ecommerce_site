import React from "react"
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../cartSlice.js"

export default function ShoppingCartItem(props) {
	const dispatch = useDispatch();

	return (
		<div className="pb-2 m-1 bg-white rounded shadow-lg lg:mx-auto lg:w-3/4">
			<div className="flex flex-col items-center place-content-center h-fit md:flex-row cart-item-container ">
				<img src={props.itemImage} alt="product" className="w-full px-4 py-2 md:w-64 h-fit md:h-60"/>
				<section className="flex flex-col h-full">
					<a href={`/productpage?itemId=${props.itemId}`} className="self-start py-3">{props.itemName}</a>
					<p>Price: {props.itemPrice}</p>
					<p>Quantity: {props.itemQuantity}</p>
					<button className="cart-remove-button md:mt-[50%] my-2 border border-grey p-2 hover:bg-main-font hover:text-white"
					type="button" 
					onClick={() => dispatch(removeItemFromCart(props.itemId))}>
					Remove item</button>
				</section>
			</div>
		</div>
	);
}