import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux"
import Header from "../components/Header.js";
import Footer from "../components/Footer.js"
import { products } from "../index.js";
import { addItemToCart } from "../cartSlice.js"

export default function ProductPage() {
	// show product corresponding to the id in the url
	let [searchParams] = useSearchParams();
	let itemId = searchParams.get("itemId");
	const dispatch = useDispatch();

	return (
		<div className="flex flex-col h-screen font-light bg-main-background text-main-font">
			<Header />
			<section className="grid grid-cols-2">
				<div className="pl-2">
					<img className="self-center w-full h-80" 
					src={products[itemId]["itemImage"]} alt="shoe"/>
				</div>
				<div className="flex flex-col pl-6">
					<h2 className="text-lg">{products[itemId]["itemName"]}</h2>
					<p><strong>${products[itemId]["itemPrice"]}</strong></p>
					<p>{products[itemId]["itemDesc"]}</p>
					<div className="flex flex-row self-end gap-1 pr-2">
						<form id="add-to-cart-form" name="add-to-cart-form" className="self-end">
							<fieldset>
								<select
								className="bg-white border border-black" 
								name="number-of-items" id="number-of-items-select" defaultValue="one">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</fieldset>
						</form>
						<button
							className="px-4 py-2 bg-white border border-solid hover:bg-grey"
							id="add-to-cart-button"
							name="add-to-cart-button"
							type="button"
							onClick={() => dispatch(addItemToCart(itemId))}
						>
							Add to cart
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}