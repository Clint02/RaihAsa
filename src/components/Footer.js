import React from "react";
import Facebook from "./img/facebook.svg";
import Xbox from "./img/xbox.svg";
import Twitter from "./img/twitter.svg";
import Linkedin from "./img/linkedin.svg";
import Figma from "./img/figma.svg";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="relative w-full overflow-y-hidden bg-black py-10"
		>
			<div className="flex flex-row gap-8">
				<div className="w-64 text-white mx-auto">
					<p className="font-fontlogo text-5xl mb-4">
						Raih<span className="italic text-red">Asa</span>
					</p>
					<p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
				</div>
				<div className="w-64 text-white mx-auto">
					<p className="mb-8 text-xl font-bold">Company</p>
					<p className="my-2">About Us</p>
					<p className="my-2">Careers</p>
					<p className="my-2">FAQs</p>
					<p className="my-2">Teams</p>
					<p className="my-2">Contact Us</p>
				</div>
				<div className="w-64 text-white mx-auto flex flex-col">
					<button type="submit" className="bg-red rounded-md px-8 py-2 mb-8">
						Contact Us
					</button>
					<button type="submit" className="bg-red rounded-md px-8 py-2 mb-8">
						Get Started
					</button>
					<div className="flex flex-row w-6 ">
						<a href="#">
							<img src={Facebook} className="mx-4"></img>
						</a>
						<a href="#">
							<img src={Xbox} className="mx-4"></img>
						</a>
						<a href="#">
							<img src={Twitter} className="mx-4"></img>
						</a>
						<a href="#">
							<img src={Linkedin} className="mx-4"></img>
						</a>
						<a href="#">
							<img src={Figma} className="mx-4"></img>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
