import React from "react";
import StarRating from "./components/StarRating";

const App = () => {
	return (
		<div className="flex flex-col items-center mt-20">
			<h1 className="text-3xl font-bold uppercase mb-10">Star Rating</h1>
			<StarRating numStars={10} />
		</div>
	);
};

export default App;
