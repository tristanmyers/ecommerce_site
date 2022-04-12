import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./store.js";
import App from "./App.js";
import Cart from "./components/ShoppingCart.js";
import ProductPage from "./pages/ProductPage.js";
import ShoppingCartPage from "./pages/ShoppingCartPage.js";

const rootElement = document.querySelector("#root");
export const products = [
  {
    itemId: 0,
    itemName: "Cool Shoe",
    itemPrice: 300,
    itemDesc: "dis shoe feel cool",
    itemImage: process.env.PUBLIC_URL + "/images/adidas.webp"
  },
  {
    itemId: 1,
    itemName: "Neat Shoe",
    itemPrice: 50,
    itemDesc: "dis shoe feel neat",
    itemImage: process.env.PUBLIC_URL + "/images/converse_boot.jpg"
  },
  {
    itemId: 2,
    itemName: "Strong Shoe",
    itemPrice: 400,
    itemDesc: "dis shoe feel strong",
    itemImage: process.env.PUBLIC_URL + "/images/dr_martens.jpg"
  },
  {
    itemId: 3,
    itemName: "Light Shoe",
    itemPrice: 100,
    itemDesc: "dis shoe feel light",
    itemImage: process.env.PUBLIC_URL + "/images/nike_shoe.webp"
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="productpage" element={<ProductPage />}>
            <Route path=":itemId" element={<ProductPage />} />
          </Route>
          <Route path="shoppingcart" element={<ShoppingCartPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
