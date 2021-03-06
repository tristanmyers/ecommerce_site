import React from "react";

import "./index.css";
import { products } from "./index.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ItemCard from "./components/ItemCard.js";

export const cartStorage = window.sessionStorage;


function RenderCard(props) {
  return products.map((product, index) => (
      <ItemCard
      key={index}
      itemId={product["itemId"]}
      itemName={product["itemName"]}
      itemPrice={product["itemPrice"]}
      itemDesc={product["itemDesc"]}
      itemImage={product["itemImage"]}  
      />
  ))
}

export default function App() {
  return (
    <div className="flex flex-col font-light app bg-main-background text-main-font">
      <Header />
      <section className="flex flex-col my-2 gap-y-1 main-card-container md:flex-wrap md:flex-row">
        <RenderCard />
      </section>
      <Footer />
    </div>
  );
}