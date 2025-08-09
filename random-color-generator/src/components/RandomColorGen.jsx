import {useState} from "react";

export default function RandomColorGenerator() {
	const [color, setColor] = useState("#000000");

	function handleRandomize(length) {
		return Math.floor(Math.random() * length);
	}

	function handleCreateHexColor() {
		const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[handleRandomize(hex.length)];
		}
		setColor(hexColor);
	}

	return (
		<div
			className="flex flex-col items-center text-center text-3xl"
			style={{
				width: "100vw",
				height: "100vh",
				background: color,
			}}>
			<button
				className="border w-[20rem] rounded-xl p-4 m-4 cursor-pointer mt-40"
				onClick={handleCreateHexColor}>
				Generate Random Color
			</button>
			<div>
				<h1>{color}</h1>
			</div>
		</div>
	);
}
