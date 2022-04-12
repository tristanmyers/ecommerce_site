import React from 'react';
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart.js";

export default function Header() {
  const numberOfItems = useSelector((state) => state.cart.numberOfItems);
     
  return (
    <div className="sticky top-0 flex flex-row w-screen bg-main-background header-container">
      <h1 className="w-full ml-1 text-2xl logo"><a href="/">Awesome Shoes</a></h1>
      <ShoppingCart numberOfItems={numberOfItems}/>
    </div>
  );
}