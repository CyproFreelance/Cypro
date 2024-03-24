import React from "react";
import "./hero.css";
import Link from "next/link";
const HeroSection = () => {
	return (
		<div className="hero">
			<div className="heroContainer ">
				<div className="heading">
					<div className="dots"></div>
          {/* this H1 */}
					<h1 className="mt-3 bg-clip-text text-transparent bg-gradient-to-r leading-tight mb-2 text-7xl text-center from-[#ffffff] to-[rgba(255,255,255,0.42)]">
						Cypro Studios: Your <br /> Business partner
					</h1>
					<p>Experience user-centric innovation for your business</p>
				</div>
			</div>

			<div className="buttonSection mt-8">
				<Link
					href="/contact"
					className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-8 py-3 rounded-[3px] btn"
				>
					<span className="spani text-white font-semibold text-xl">Get Started</span>
				</Link>
				<Link
					href="/contact"
					className="redbtn border-2 border-[#FF1D60] px-8 py-3 rounded-[3px] btn hover:border-white"
				>
					<span className="spani text-white font-semibold text-xl">Place Order</span>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
