const Navbar = () => {
	return (
		<nav className="h-auto bg-black">
			<div className="flex flex-row text-white justify-between py-3">
				<button href="#" className="font-fontlogo text-5xl ">
					Raih<span className="italic text-red">Asa</span>
				</button>
				<div className="flex flex-row justify-around my-auto">
					<button href="#" className="text-l px-12 ">
						Home
					</button>
					<button href="#" className="text-l px-12 ">
						About us
					</button>
					<button href="#" className="text-l px-12 ">
						Contact
					</button>
					<button href="#" className="text-l px-12 ">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
