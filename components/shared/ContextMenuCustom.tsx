import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";
import BelowHero from "../Hero/BelowHero";
import { DisplayScroll } from "../Hero/DisplayScroll";
import Faq from "../Hero/Faq";
import HeroSection from "../Hero/HeroSection";
import { Spectrum } from "../Hero/Spectrum";
import { Testmonials } from "../Hero/Testimonials";
import { FloatingNav } from "../ui/floating-navbar";
import Footer from "./Footer";
import { SignedOut } from "@clerk/nextjs";
// import { SheetMenu } from "../shared/SheetMenu"

export function ContextMenuCustom() {
	return (
		<ContextMenu>
			<ContextMenuTrigger className="">
				<>
					<SignedOut>
						<FloatingNav />
						{/* <SheetMenu/> */}
						{/* <NavbarDemo/> */}
						<HeroSection />
						<BelowHero />
						<DisplayScroll />
						<Spectrum />
						<Testmonials />
						<Faq />
						<Footer />
					</SignedOut>
				</>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem inset>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset disabled>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset>
					Reload
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger inset>Our Socials</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-48">
						<ContextMenuItem>
							Twitter X<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
						</ContextMenuItem>
						<ContextMenuItem>Discord</ContextMenuItem>
						<ContextMenuItem>Instagram</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Linked in</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem checked>
					Order Now
					<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem>Contact us</ContextMenuCheckboxItem>
			</ContextMenuContent>
		</ContextMenu>
	);
}
