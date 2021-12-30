import ShoppingCart from "../components/ShoppingCart.js";

export default function Header(props) {
  return (
    <div className="header-container">
      <h1 className="logo">Awesome Shoes</h1>
      <ShoppingCart cartItemCounter={props.cartItemCounter} />
    </div>
  );
}
