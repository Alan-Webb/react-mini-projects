import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
	return (
		<nav className="mb-20 flex align-items-center justify-between py-6">
			<div className="flex flex-shrink-0 align-items-center">
				<img src={logo}/>
			</div>
		</nav>
	);
};

export default Navbar;
