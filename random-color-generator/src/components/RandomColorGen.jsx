import {useEffect, useState} from "react";

const RandomColorGen = () => {
	const [colorType, setColorType] = useState("hex");
	const [color, setColor] = useState("#000000");

	function randomColorGen(length) {
		return Math.floor(Math.random() * length);
	}

	function handleRandomHexColor() {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorGen(hex.length)];
		}
		// console.log(hexColor);
		setColor(hexColor);
	}

	function handleRandomRgbColor() {
		const r = randomColorGen(256);
		const g = randomColorGen(256);
		const b = randomColorGen(256);

		setColor(`rgb(${r}, ${g}, ${b})`);
	}

	useEffect(() => {
		if (colorType === "rgb") handleRandomRgbColor();
		else handleRandomHexColor();
	}, [colorType]);

	return (
		<div
			className="flex flex-col items-center justify-center gap-6"
			style={{width: "100vw", height: "100vh", background: color}}>
			<button
				onClick={() => setColorType("hex")}
				className="border p-4 rounded cursor-pointer text-3xl">
				Generate HEX Color
			</button>
			<button
				onClick={() => setColorType("rgb")}
				className="border p-4 rounded cursor-pointer text-3xl">
				Generate RGB Color
			</button>
			<button
				onClick={
					colorType === "hex" ? handleRandomHexColor : handleRandomRgbColor
				}
				className="border p-4 rounded cursor-pointer text-2xl">
				Create Random Color
			</button>
			<div className="text-3xl text-center">
				<h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
};

export default RandomColorGen;
