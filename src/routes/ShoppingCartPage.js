import React from "react";
import Header from "../components/Header";
import { products } from "../index.js";
import ShoppingCartItem from "../components/ShoppingCartItem.js";

// TODO: uses sessionStorage and hooks to keep track of how many items on are the cart
const cartStorage = window.sessionStorage;
const items = JSON.parse(cartStorage.getItem("itemsInCart"));

export default function ShoppingCartPage(props) {
	return (
    <div>
      <Header />   
			{renderItemsInCart()}
		</div>
	);
}

function renderItemsInCart() {
	// match the item id and render them
	return (
		products.filter((product, index) => products[index]["itemId"] === Number(items["itemId"]))
		.map((product, index) => {
				return (
					<ShoppingCartItem key={index} itemName={product.itemName} itemQuantity={items["quantity"]}/>
				);
			}
		)
	)
}