import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.addItemToCart = this.addItemToCart.bind(this);
  // }
  // addItemToCart() {
  //   this.props.addItemToCart(this.props.itemName, this.props.itemPrice);
  // }
  render() {
    return (
      <div className="card-container">
        <img
          src={this.props.itemImage}
          alt="a white and black adidas sneaker"
        />
        <div className="product-properties">
          <h3 className="product-name">{this.props.itemName}</h3>
          <p className="product-desc">{this.props.itemDesc}</p>
          <p className="product-price">
            <strong>${this.props.itemPrice}</strong>
          </p>
        </div>
        <Link 
        to={`/productpage?itemId=${this.props.itemId}`}
        >See more</Link>
      </div>
    );
  }
}
