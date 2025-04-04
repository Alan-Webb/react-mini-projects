import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
	return (
		<nav className="mb-20 flex align-items-center justify-between py-6">
			<div className="flex flex-shrink-0 align-items-center">
				<img className="m-auto w-10 h-10" src={logo} alt="logo" />
			</div>
			<div className="m-8 flex items-center justify-center gap-4 text-2xl">
				<FaLinkedin />
				<FaGithub />
				<FaSquareXTwitter />
				<FaInstagram />
			</div>
		</nav>
	);
};

export default Navbar;
