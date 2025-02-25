import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Review from "./components/Review";

const App = () => {
	return (
		<main className="overflow-y-hidden text-neutral-200 antialiased">
			<Navbar />
			<Hero />
			<Dishes />
			<About />
			<Mission />
			<Expertise />
			<Review />
		</main>
	);
};

export default App;
