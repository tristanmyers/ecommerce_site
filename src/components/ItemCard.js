import React from "react";
import { Link } from "react-router-dom";

export default class ItemCard extends React.Component {
  render() {
    return (
      <div className="flex flex-row py-2 bg-white border-white rounded md:mx-0 md:h-96 md:w-1/3 md:flex-col card-container border-y-2 ">
        <img
          src={this.props.itemImage}
          alt="shoe"
          className="w-56 mr-6 md:ml-4 md:h-56"
        />
        <div className="flex flex-col items-start w-full gap-1 mr-1 md:items-center product-properties">
          <h3 className="text-lg product-name">{this.props.itemName}</h3>
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
