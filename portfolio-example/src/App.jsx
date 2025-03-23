import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
	return (
		<main
			className="font-light text-white antialiased selection:bg-linear-300
		selection:text-black">
			<Navbar />
			<Hero />
		</main>
	);
};

export default App;
