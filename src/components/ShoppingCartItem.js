import React from "react"

// TODO: add remove button use sessionStorage.remove()
export default function ShoppingCartItem(props) {
	return (
		<div className="shopping-cart-item">
			<h3>{props.itemName}</h3>
			<p>{props.itemQuantity}</p>
		</div>
	);
} 