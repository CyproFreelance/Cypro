"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
	return (
		<div className="w-full flex items-center justify-center px-16 py-5">
			<div className="flex items-center justify-center text-white font-extrabold leading-snug text-xl">
				<Link href="/">
					<Image
						src="/logo.webp"
						alt=""
						loading="lazy"
						height={65}
						width={65}
						className="rounded-full mr-2"
					/>
				</Link>
				<Link href="/">
					<div className="text leading-none">
						<h1 className="bg-clip-text text-transparent font-[900] bg-gradient-to-r from-[#FF1D60] to-[#C71869]">
							CYPRO
						</h1>
						<span className="">STUDIO</span>
					</div>
				</Link>
			</div>
			<Navbar className="top-8" />
			<Link
				href="/contact"
				className="redbtn bg-gradient-to-r from-[#FF6053] via-[#FF1D60] to-[#C71869] px-8 py-3 rounded-[3px] ">
				<span className="spani text-white font-semibold text-xl">ORDER</span>
			</Link>
		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div className={cn("inset-x-0 max-w-2xl mx-auto z-50", className)}>
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} item="About">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/contact">Blogs</HoveredLink>
						<HoveredLink href="/about">About Cypro</HoveredLink>
						<HoveredLink href="/service">Apply as Freelancer</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Services">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev">Web Development</HoveredLink>
						<HoveredLink href="/interface-design">Interface Design</HoveredLink>
						<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
						<HoveredLink href="/branding">Branding</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Products">
					<div className="text-sm grid grid-cols-2 gap-10 p-4">
						<ProductItem
							title="Algochurn"
							href="https://algochurn.com"
							src="/algochurn.webp"
							description="Prepare for tech interviews like never before."
						/>
						<ProductItem
							title="Tailwind Master Kit"
							href="https://tailwindmasterkit.com"
							src="/tailwindmasterkit.webp"
							description="Production ready Tailwind css components for your next project"
						/>
						<ProductItem
							title="Moonbeam"
							href="https://gomoonbeam.com"
							src="/screenshot.png"
							description="Never write from scratch again. Go from idea to blog in minutes."
						/>
						<ProductItem
							title="Rogue"
							href="https://userogue.com"
							src="/idk.png"
							description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
						/>
					</div>
				</MenuItem>
				<Link href="/contact">Contact</Link>
			</Menu>
		</div>
	);
}
