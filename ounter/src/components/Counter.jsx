import {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center text-center text-3xl mt-12">
			<div className="border p-8 rounded-xl text-6xl">
				<span>{count}</span>
			</div>
			<div className="mt-12">
				<button
					onClick={() => setCount(count + 1)}
					className="border rounded-xl p-4 m-2 cursor-pointer">
					+
				</button>
				<button
					onClick={() => setCount(count - 1)}
					className="border rounded-xl p-4 m-2 cursor-pointer">
					-
				</button>
				<button
					onClick={() => setCount(0)}
					className="border rounded-xl p-4 m-2 cursor-pointer">
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
