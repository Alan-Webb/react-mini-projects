import {useEffect, useState} from "react";
import {FaTimes} from "react-icons/fa";
import {FaBars} from "react-icons/fa6";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (!isOpen) {
			document.body.style.overflow = "hidden;";
		} else {
			document.body.style.overflow = "auto;";
		}
	}, [isOpen]);

	return (
		<>
			<nav className="fixed right-0 top-0 z-30 p-4">
				<button onClick={toggleMenu} className="rounded-md p-2">
					{isOpen ? (
						<FaTimes className="h-6 w-6" />
					) : (
						<FaBars className="h-6 w-6" />
					)}
				</button>
			</nav>
			{isOpen && (
				<div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
          <ul>
            
          </ul>
        </div>
			)}
		</>
	);
};

export default Navbar;
