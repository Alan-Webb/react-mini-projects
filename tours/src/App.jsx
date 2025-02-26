const url = "https://course-api.com/react-tours-project";
import React, {useState, useEffect} from "react";
import Tours from "./components/Tours";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			console.log(tours);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	return (
		<main>
			<h2>Tours</h2>
			<Tours />
		</main>
	);
};

export default App;
