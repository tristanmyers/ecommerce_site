import { cartStorage } from "../App.js";

export default function Cart(props) {
	return (
		<div>
			<p>{cartStorage.getItem("Cool Shoe")}</p>
		</div>
	);
}