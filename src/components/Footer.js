import React from "react";

export default function Footer() {
	return(
		<div className="flex flex-col items-center h-24 p-4 border-t-2 border-grey bg-main-background footer">
			<p>Made by Tristan Myers</p>
			<p>Contact at: <a href="mailto:tristanmyers.developer@gmail.com" className="underline">tristanmyers.developer@gmail.com</a></p>
		</div>
	);
}