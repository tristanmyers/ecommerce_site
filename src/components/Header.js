import ShoppingCart from "./ShoppingCart.js";

export default function Header(props) {
  return (
    <div className="flex flex-row items-end w-screen mb-4 header-container gap-x-60">
      <h1 className="ml-1 text-2xl logo"><a href="/">Awesome Shoes</a></h1>
      <ShoppingCart />
    </div>
  );
}
