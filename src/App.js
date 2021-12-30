import React from "react";

import "./styles/styles.css";
import { products } from "./index.js";
import Card from "./components/Card.js";
import Header from "./components/Header.js";

export const cartStorage = window.sessionStorage;
export default class App extends React.Component {
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
        <Header itemsInCart={this.state.itemsInCart} cartItemCounter={this.state.itemsInCart.length} />
        <section className="main-card-container">
          {
            products.map((product, index) => {
              return (
                <Card
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