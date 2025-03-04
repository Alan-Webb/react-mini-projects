import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Award from "./components/Award";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	return (
		<main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Award />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
