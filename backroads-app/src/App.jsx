import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Tours from "./Components/Tours";
import Footer from "./Components/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Tours />
			<Footer />
		</>
	);
}
