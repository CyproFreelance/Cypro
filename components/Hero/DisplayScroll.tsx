import React from "react";
import StickyRoll from "../ui/sticky-scroll-reveal";

export const DisplayScroll = () => {
	return (
		<div className="py-14">
			<h3 className="text-[#FF4D00] text-xl text-center">Approach</h3>
			<h1 className="relative bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-2 text-4xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)]">
				OUR APPROACH
			</h1>
			<StickyRoll />
		</div>
	);
};
