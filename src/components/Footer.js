import React from "react";

export default function Footer() {
	return(
		<div className="sticky bottom-0 flex flex-col items-center w-full h-20 m-2 bg-main-background footer">
			<p>Made by Tristan Myers</p>
			<p>Contact at <a href="mailto:tristanmyers.developer@gmail.com" className="underline">tristanmyers.developer@gmail.com</a></p>
		</div>
	);
}