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
					return cartStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart));
				}	else {
					return console.log("no item to remove");
				}
			})
		}
	}
});

export const { removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;