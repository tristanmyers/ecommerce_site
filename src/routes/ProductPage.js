import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header.js";
import { products } from "../index.js";

const cartStorage = window.sessionStorage;

export default function ProductPage(props) {
	// show product corresponding to the id in the url
	let [searchParams] = useSearchParams();
	let itemId = searchParams.get("itemId");
	return (
		<div>
			<Header />
				<section>
					<h2>{products[itemId]["itemName"]}</h2>
					<img src={products[itemId]["itemImage"]} alt="black and white sneaker" width="auto" height="400px"/>
					<p>{products[itemId]["itemDesc"]}</p>
					<p><strong>${products[itemId]["itemPrice"]}</strong></p>
					<form id="add-to-cart-form" name="add-to-cart-form">
						<fieldset>
							<select name="number-of-items" id="number-of-items-select" defaultValue="one">
								<option value="quantity of items" disabled>--Quantity of this item--</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</fieldset>
					</form>
					<button
						id="add-to-cart-button"
						name="add-to-cart-button"
						type="button"
						onClick={() => addToCart(itemId)}
					>
						Add to cart
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 0 24 24"
							width="24px"
							fill="#000000"
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z" />
						</svg>
					</button>
				</section>
		</div>
	);
}

// checks if there are any itemsInCart in sessionStorage if not setItem normally.
// if there are items, parse the current stored item and push the new item onto the array of objects then setitem
function addToCart(id) {
	let itemQuantity = document.querySelector("#number-of-items-select").selectedOptions[0].value;
	if (cartStorage.getItem("itemsInCart") === null) {
		cartStorage.setItem("itemsInCart", JSON.stringify([{itemId: id, quantity: itemQuantity}]));
	} else {
		const currentStorage = JSON.parse(cartStorage.getItem("itemsInCart"));
		currentStorage.push({itemId: id, quantity: itemQuantity});
		cartStorage.setItem("itemsInCart", JSON.stringify(currentStorage));
	}
}