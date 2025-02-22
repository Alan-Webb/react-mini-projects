import {useState} from "react";
import Search from "./components/Search.jsx";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<main>
			<div className="pattern" />
			<div className="wrapper">
				<header>
					<img src="./src/assets/hero.png" alt="movie posters" />
					<h1 className="uppercase">
						Find the <span className="text-gradient">movies</span> you want at
						<span className="text-gradient"> cinephilopolis</span>
					</h1>
				</header>
				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<h1 className="text-white">{searchTerm}</h1>
			</div>
		</main>
	);
}

export default App;
