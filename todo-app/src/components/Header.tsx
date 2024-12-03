import Logo from "./Logo";

export default function Header() {
	return (
		<header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed]">
			<Logo />

			<p>
				<b>0</b> / 0 todos completed
			</p>
		</header>
	);
}
