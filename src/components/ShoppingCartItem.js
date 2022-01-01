import React from "react"

export default function ShoppingCartItem(props) {
	return (
		<div className="shopping-cart-item">
			<h3>{props.itemName}</h3>
			<p>{props.itemQuantity}</p>
		</div>
	);
} 