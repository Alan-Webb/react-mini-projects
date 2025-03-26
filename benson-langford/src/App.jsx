import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Projects />
		</div>
	);
};

export default App;
