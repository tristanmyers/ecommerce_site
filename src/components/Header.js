import ShoppingCart from "./ShoppingCart.js";

export default function Header(props) {
  return (
    <div className="header-container flex flex-row items-end w-screen gap-x-60">
      <h1 className="logo text-2xl ml-1"><a href="/">Awesome Shoes</a></h1>
      <ShoppingCart />
    </div>
  );
}
