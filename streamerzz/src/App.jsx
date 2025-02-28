import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import Pricing from "./components/Pricing";

const App = () => {
	return (
		<main className="text-sm text-neutral-300 antialiased">
			<Navbar />
			<Hero />
			<HowItWorks />
			<KeyFeatures />
			<Pricing />
		</main>
	);
};

export default App;
