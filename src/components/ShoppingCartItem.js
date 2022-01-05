import React from "react"

const cartStorage = window.sessionStorage;
const items = JSON.parse(cartStorage.getItem("itemsInCart"));

// TODO: rerender after item has been removed
export default function ShoppingCartItem(props) {
	return (
		<div className="cart-item-container bg-white flex flex-row h-1/3 py-2 border-y-2 border-white rounded">
			<p>{props.itemName} {props.itemQuantity}</p>
			<button className="cart-remove-button"
			 type="button" 
			 onClick={() => removeItemFromCart(props.itemId)}>
			Remove item</button>
		</div>
	);
} 

function removeItemFromCart(id) {
	items.map((item, index) => {
		if (id === item.itemId) {
			items.splice(index, 1);
			return cartStorage.setItem("itemsInCart", JSON.stringify(items));
		}	else {
			return console.log("no item to remove");
		}
	})
}