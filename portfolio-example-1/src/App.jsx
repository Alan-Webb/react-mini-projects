import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
	return (
		<main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
			<Navbar />
			<Hero />
			<About />
		</main>
	);
};

export default App;
