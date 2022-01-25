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
      <section className="main-card-container flex flex-col md:flex-wrap md:flex-row space-y-0.5 md:space-y-0 md:gap-y-0.5">
        <RenderCard />
      </section>
      <Footer />
    </div>
  );
}