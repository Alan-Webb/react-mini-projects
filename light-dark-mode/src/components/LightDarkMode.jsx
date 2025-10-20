import "../index.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	function handleToggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}
	console.log(theme);

	return (
		<div
			className="flex flex-col items-center text-3xl text-center font-bold pt-24 light-dark-mode"
			data-theme={theme}>
			<div>
				<h1>Hello World!</h1>
				<button
					onClick={handleToggleTheme}
					className="border rounded-xl p-6 m-6 cursor-pointer">
					Change Theme
				</button>
			</div>
		</div>
	);
};

export default LightDarkMode;
