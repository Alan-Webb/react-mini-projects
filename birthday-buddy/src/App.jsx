import {useState} from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
	const [people, setPeople] = useState(data);

	return (
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
				<List people={people} />
				<button
					type="button"
					className="btn btn-block"
					onClick={() => setPeople([])}>
					Clear List
				</button>
			</section>
		</main>
	);
};

export default App;
