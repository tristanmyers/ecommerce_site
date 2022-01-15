import React from "react";

import "./index.css";
import { products } from "./index.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ItemCard from "./components/ItemCard.js";

export const cartStorage = window.sessionStorage;

// starting resolution is 360 width
export default class App extends React.Component {
  renderCard() {
    return products.map((product, index) => {
      return (
        <ItemCard
        key={index}
        itemId={products[index]["itemId"]}
        itemName={products[index]["itemName"]}
        itemPrice={products[index]["itemPrice"]}
        itemDesc={products[index]["itemDesc"]}
        itemImage={products[index]["itemImage"]}  
        />
      );
    })
  }
  render() {
    return (
      <div className="flex flex-col font-light app bg-main-background text-main-font">
        <Header />
        <section className="main-card-container flex flex-col space-y-0.5">
          {this.renderCard()}
        </section>
        <Footer />
      </div>
    );
  }
}