import {useState} from "react";
import logo from "../assets/logo.png";
import {RiCloseFill, RiMenuFill} from "react-icons/ri";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-4 left-0 right-0 z-50 m-2">
			<div className="text-neutral-500 bg-black/60 backdrop-blur-md max-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
				<img src={logo} alt="logo" width={120} height={24} />
				<div className="hidden md:flex space-x-6">
					<a href="#works" className="hover:text-neutral-200 ">
						How it works
					</a>
					<a href="#pricing" className="hover:text-neutral-200 ">
						Pricing
					</a>
					<a href="#testimonials" className="hover:text-neutral-200 ">
						Testimonials
					</a>
				</div>
				{/* right side buttons: hidden on mobile */}
				<div className="hidden md:flex space-x-4 items-center">
					<a href="#" className="hover:text-neutral-200">
						Login
					</a>
					<a
						href="#"
						className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
						Get a Demo
					</a>
					<a
						href="#"
						className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
						Start Free Trial
					</a>
				</div>
				{/* Hamburger menu icon */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
						aria-label={isOpen ? "Close Menu" : "Open Menu"}>
						{isOpen ? <RiCloseFill /> : <RiMenuFill />}
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
					<div className="flex flex-col space-x-4">
						<a href="#" className="hover:text-neutral-200 ms-3 mb-1">
							Product
						</a>
						<a href="#" className="hover:text-neutral-200 ms-3 mb-1">
							Pricing
						</a>
						<a href="#" className="hover:text-neutral-200 ms-3 mb-1">
							Resources
						</a>
						<a href="#" className="hover:text-white ms-3">
							Login
						</a>
						<a
							href="#"
							className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition my-3 mx-3">
							Get a Demo
						</a>
						<a
							href="#"
							className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition mx-3">
							Start Free Trial
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
