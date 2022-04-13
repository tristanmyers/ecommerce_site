import React from "react";
import { Link } from "react-router-dom";

export default class ItemCard extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center pb-4 bg-white md:w-1/2 card-container xl:w-1/3 xxl:w-1/4">
        <img
          src={this.props.itemImage}
          alt="shoe"
          className="w-full px-2 py-2 h-96 lg:w-96"
        />
        <div className="flex flex-col items-center product-properties">
          <h3 className="pb-2 text-xl product-name">{this.props.itemName}</h3>
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
