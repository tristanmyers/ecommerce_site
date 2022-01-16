import { createSlice } from "@reduxjs/toolkit";

const cartStorage = window.sessionStorage;
let items = JSON.parse(cartStorage.getItem("itemsInCart"));
let itemsLength = items === null ? 0 : items.length;

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsInCart: JSON.parse(cartStorage.getItem("itemsInCart")),
		numberOfItems: itemsLength
	},
	reducers: {
		removeItemFromCart: (state, action) => {
			state.itemsInCart.map((item, index) => {
				if (action.payload === item.itemId) {
					state.itemsInCart.splice(index, 1);
					cartStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart));
					return state.numberOfItems = state.itemsInCart.length;
				}	else {
					return console.log("no item to remove");
				}
			})
		},
		// checks if there are any itemsInCart in sessionStorage if not setItem normally.
		// if there are items, parse the current stored item and push the new item onto the array of objects then setitem
		addItemToCart: (state, action) => {
			let itemQuantity = document.querySelector("#number-of-items-select").selectedOptions[0].value;
			if (state.itemsInCart === null) {
				cartStorage.setItem("itemsInCart", JSON.stringify([{itemId: action.payload, quantity: itemQuantity}]));
				state.numberOfItems = state.itemsInCart.length;
			} else {
				// const currentStorage = state.itemsInCart;
				state.itemsInCart.push({itemId: action.payload, quantity: itemQuantity});
				cartStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart));
				state.numberOfItems = state.itemsInCart.length;
			}
		}
	}
});

export const { removeItemFromCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;