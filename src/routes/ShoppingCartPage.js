import React from "react";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js'
import { products } from "../index.js";
import ShoppingCartItem from "../components/ShoppingCartItem.js";

const cartStorage = window.sessionStorage;
const items = JSON.parse(cartStorage.getItem("itemsInCart"));

export default function ShoppingCartPage(props) {
	return (
    <div className="flex flex-col bg-main-background text-main-font font-light">
      <Header />
			{renderItemsInCart()}
			<Footer />
		</div>
	);
}
/* 
getting ids for available products, for each item check if the id matches an id in availableProductIds
if so render the ShoppingCartItem component.
*/ 
function renderItemsInCart() {
	const availableProductsIds = products.map((product, index) => products[index].itemId);
	if (items === null || items.length === 0) {
		return <p>No items in cart</p>
	} else {
		return items.map((item, index) => {
			if (Number(item.itemId) === availableProductsIds[item.itemId]) {
				return <ShoppingCartItem key={index} itemId={item.itemId} itemName={products[item.itemId].itemName} itemQuantity={items[index].quantity}/>
			} else {
				return <p>Item not avaiable</p>
			}
		})
	}
}