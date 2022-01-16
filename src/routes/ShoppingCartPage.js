import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js'
import { products } from "../index.js";
import ShoppingCartItem from "../components/ShoppingCartItem.js";


export default function ShoppingCartPage(props) {
	const items = useSelector((state) => state.cart.itemsInCart);
	
	// getting ids for available products, for each item check if the id matches an id in availableProductIds if so render the ShoppingCartItem component.
	function renderItemsInCart() {
		const availableProductsIds = products.map((product, index) => products[index].itemId);
		if (items === null || items.length === 0) {
			return <p>No items in cart</p>
		} else {
			return items.map((item, index) => {
				if (Number(item.itemId) === availableProductsIds[item.itemId]) {
					return <ShoppingCartItem key={index} itemId={item.itemId} itemName={products[item.itemId].itemName} itemQuantity={items[index].quantity} itemImage={products[index].itemImage} />
				} else {
					return <p>Item not available</p>
				}
			})
		}
	}
	return (
    <div className="flex flex-col gap-1 font-light bg-main-background text-main-font">
      <Header />
			{renderItemsInCart()}
			<Footer />
		</div>
	);
}