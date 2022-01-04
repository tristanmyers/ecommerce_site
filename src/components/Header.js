import ShoppingCart from "./ShoppingCart.js";

export default function Header(props) {
  return (
    <div className="header-container">
      <h1 className="logo"><a href="/">Awesome Shoes</a></h1>
      <ShoppingCart />
    </div>
  );
}
