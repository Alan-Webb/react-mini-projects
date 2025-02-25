import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import About from "./components/About";

const App = () => {
	return (
		<main className="overflow-y-hidden text-neutral-200 antialiased">
			<Navbar />
			<Hero />
			<Dishes />
			<About />
		</main>
	);
};

export default App;
