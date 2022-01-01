import React from "react";

import "./styles/styles.css";
import { products } from "./index.js";
import ItemCard from "./components/ItemCard.js";
import Header from "./components/Header.js";

export const cartStorage = window.sessionStorage;
export default class App extends React.Component {
  // none of the state and constructor stuff is needed right now
  constructor(props) {
    super(props);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.state = {
      itemsInCart: [],
      cartItemCounter: 0
    };
  }
  addItemToCart(name, price) {
    this.setState({
      itemsInCart: [
        ...this.state.itemsInCart,
        {itemName: name, itemPrice: price}
      ]
    });
    this.setState({
      cartItemCounter: this.state.itemsInCart.length + 1
    });
    cartStorage.setItem("itemsInCart", JSON.stringify({"name": name, "price": price}));
  }
  render() {
    return (
      <div className="app">
        <Header />
        <section className="main-card-container">
          {
            products.map((product, index) => {
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
        </section>
      </div>
    );
  }
}