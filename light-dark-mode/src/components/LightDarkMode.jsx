import UseLocalStorage from "./UseLocalStorage";

const LightDarkMode = () => {
	const [theme, setTheme] = UseLocalStorage("theme", "dark");

	function handleToggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	console.log(theme);

	return (
		<div
			className="flex flex-col items-center text-3xl text-center light-dark-mode"
			data-theme={theme}>
			<div>
				<p className="mt-20">Hello World!!</p>
				<button
					onClick={handleToggleTheme}
					className="border rounded-xl p-4 m-12 cursor-pointer">
					Change Theme
				</button>
			</div>
		</div>
	);
};
export default LightDarkMode;
