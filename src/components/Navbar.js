import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="flex text-white justify-between items-center h-16 relative">
				<Link to="/" className="font-fontlogo text-5xl pl-16">
					Raih<span className="italic text-red">Asa</span>
				</Link>
				<div className="px-4 cursor-pointer md:hidden">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
				<div className="pr-8 md:block hidden">
					<Link to="/" className="text-l py-4 px-16">
						Home
					</Link>
					<Link to="/" className="text-l py-4 px-16">
						About us
					</Link>
					<Link to="/" className="text-l py-4 px-16">
						Contact
					</Link>
					<Link
						to="/"
						className="text-l my-2 mx-8 py-2 px-8 border-2 border-white rounded-md"
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
