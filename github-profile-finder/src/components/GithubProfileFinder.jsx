// 1. Div in div, input, btn. Create handleSubmit func, add to btn. Declare userName state & add value & onChange to input.

// 2. Add async func & useEffect to call it. Clg data = get info.

// 3. Declare userData & loading state, setLoading at start of async func & if check (below res.json). 
// Add loading h1 if check.

// 4. Create userCard.

// 5. Add check below btn div. Add setUserName to if check. Add logic to handleSubmit func.

import {useEffect, useState} from "react";
import UserCard from "./UserCard";

const GithubProfileFinder = () => {
	const [userName, setUserName] = useState("alan-webb");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchGithubUser() {
		//Stage 3
		setLoading(true);
		const res = await fetch(`https://api.github.com/users/${userName}`);

		const data = await res.json();
		
		// Stage 3
		if (data) {
			setUserData(data);
			setLoading(false);
			// Stage 5
			setUserName("");
		}
		// console.log(data);
	}

	function handleSubmit() {
		fetchGithubUser();
	}

	useEffect(() => {
		fetchGithubUser();
	}, []);

	// Stage 3
	if (loading) {
		return <h1 className="text-center mt-40 text-4xl">Loading data...</h1>;
	}

	return (
		<div className="flex flex-col items-center gap-4  text-2xl mt-12">
			<div className="container mt-12">
				<input
					className="rounded-xl p-4 border"
					type="text"
					name="search-by-username"
					placeholder="Enter Username..."
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					onClick={handleSubmit}
					className="border p-4 m-4 rounded-xl cursor-pointer">
					Search
				</button>
			</div>
			{/* Stage 4 check */}
			{userData !== null ? <UserCard user={userData} /> : null}
		</div>
	);
};

export default GithubProfileFinder;
