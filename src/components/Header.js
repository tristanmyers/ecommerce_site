import React from 'react';
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart.js";

export default function Header(props) {
  const numberOfItems = useSelector((state) => state.cart.numberOfItems);
   
  return (
    <div className="sticky top-0 flex flex-row items-end w-screen mb-4 bg-main-background header-container gap-x-60">
      <h1 className="ml-1 text-2xl logo"><a href="/">Awesome Shoes</a></h1>
      <ShoppingCart numberOfItems={numberOfItems}/>
    </div>
  );
}