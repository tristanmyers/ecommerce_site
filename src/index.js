import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import App from "./App.js";
import Cart from "./routes/Cart.js";
import ProductPage from "./routes/ProductPage.js";

const rootElement = document.getElementById("root");
export const products = [
  {
    itemId: 0,
    itemName: "Cool Shoe",
    itemPrice: 300,
    itemDesc: "dis shoe feel good",
    itemImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg"
  },
  {
    itemId: 1,
    itemName: "Neat Shoe",
    itemPrice: 200,
    itemDesc: "dis shoe feel okay",
    itemImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg"
  }
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="productpage" element={<ProductPage />}>
          <Route path=":itemId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
