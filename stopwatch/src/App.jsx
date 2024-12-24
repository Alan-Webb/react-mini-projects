import "./App.css";
import {useEffect, useState} from "react";

export default function App() {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		let interval;
		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [running]);

	return (
		<div className="max-w-md flex flex-col items-center justify-center py-8">
			<h1 className="text-2xl font-semibold pb-2">Stopwatch</h1>
			<div className="text-xl font-semibold">
				<span>{"0" + Math.floor((time / 60000) % 60)}:</span>
				<span>{"0" + Math.floor((time / 1000) % 60)}:</span>
				<span>{"0" + ((time / 10) % 100)}</span>
			</div>
			<div>
				{running ? (
					<button
						onClick={() => {
							setRunning(false);
						}}>
						Stop
					</button>
				) : (
					<button
						onClick={() => {
							setRunning(true);
						}}>
						Start
					</button>
				)}

				<button
					onClick={() => {
						setTime(0);
					}}>
					Reset
				</button>
			</div>
		</div>
	);
}
