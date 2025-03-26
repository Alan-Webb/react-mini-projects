import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

const App = () => {
	return (
		<main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
			<Navbar />
			<Hero />
			<Marquee />
		</main>
	);
};
export default App;
