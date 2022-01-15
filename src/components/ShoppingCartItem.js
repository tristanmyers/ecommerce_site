import React from "react"

const cartStorage = window.sessionStorage;
const items = JSON.parse(cartStorage.getItem("itemsInCart"));

// TODO: rerender after item has been removed
export default function ShoppingCartItem(props) {
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
				onClick={() => removeItemFromCart(props.itemId)}>
				Remove item</button>
			</div>
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