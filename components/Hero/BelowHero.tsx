import React from "react";
import "./hero.css";
import Link from "next/link";
import { Box } from "../shared/Box";

const BelowHero = () => {
	return (
		<>
			<section className="belowHeroConatiner">
				<div className="belowHeroHeads">
					{/* vanilla css overriding no ? */}
					<h3 className="text-[#FF4D00] text-xl">Benefits</h3>
					<h1 className="relative mt-3 bg-clip-text font-black text-transparent bg-gradient-to-r leading-tight mb-2 text-4xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)]">
						UNLOCK THE POTENTIAL
					</h1> 
				</div>  

				<p className="w-[50%] text-[#FFFFFF] text-opacity-[58%] text-center ">
					Boost your Online Presence by getting a custom website with Cypro Studios.
				</p>
				<Box/>
			</section>
		</>
	);
};
export default BelowHero;
