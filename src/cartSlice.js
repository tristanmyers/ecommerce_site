import { createSlice } from "@reduxjs/toolkit";

const cartStorage = window.sessionStorage;
const items = JSON.parse(cartStorage.getItem("itemsInCart"));
const itemsLength = items === null ? 0 : items.length;

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		numberOfItems: itemsLength  
	},
	reducers: {
		cartLogger: (state) => {
			console.log(state.numberOfItems);
		}
	}
});

export const { cartLogger } = cartSlice.actions;
export default cartSlice.reducer;