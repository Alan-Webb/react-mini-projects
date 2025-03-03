import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
	return (
		<main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
			<Navbar />
			<Hero />
			<About />
			<Projects />
		</main>
	);
};

export default App;
