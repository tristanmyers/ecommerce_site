import React from "react";
import { Link } from "react-router-dom";

export default class ItemCard extends React.Component {
  render() {
    return (
      // why isn't this white?
      <div className="card-container bg-white flex flex-row py-2 border-y-2 border-white rounded">
        <img
          src={this.props.itemImage}
          alt="a white and black adidas sneaker"
          className="w-56 mr-6"
        />
        <div className="product-properties flex flex-col items-start w-full mr-1 gap-1">
          <h3 className="product-name text-lg">{this.props.itemName}</h3>
          <p className="product-desc">{this.props.itemDesc}</p>
          <p className="product-price">
            <strong>${this.props.itemPrice}</strong>
          </p>
          <Link 
          to={`/productpage?itemId=${this.props.itemId}`}
          className="underline">
          See more</Link>
        </div>
      </div>
    );
  }
}
