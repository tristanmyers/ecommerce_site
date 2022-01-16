import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./store.js";
import App from "./App.js";
import Cart from "./components/ShoppingCart.js";
import ProductPage from "./routes/ProductPage.js";
import ShoppingCartPage from "./routes/ShoppingCartPage.js";

const rootElement = document.querySelector("#root");
export const products = [
  {
    itemId: 0,
    itemName: "Cool Shoe",
    itemPrice: 300,
    itemDesc: "dis shoe feel cool",
    itemImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg"
  },
  {
    itemId: 1,
    itemName: "Neat Shoe",
    itemPrice: 50,
    itemDesc: "dis shoe feel neat",
    itemImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg"
  },
  {
    itemId: 2,
    itemName: "Strong Shoe",
    itemPrice: 400,
    itemDesc: "dis shoe feel strong",
    itemImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg"
  },
  {
    itemId: 3,
    itemName: "Light Shoe",
    itemPrice: 100,
    itemDesc: "dis shoe feel light",
    itemImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg"
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
