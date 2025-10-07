import {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center mt-12">
			<div className="text-8xl text-center border w-[12rem] rounded-xl bg-blue-600 p-8 m-8">
				<span>{count}</span>
			</div>
			<div className="flex gap-4">
				<button
					onClick={() => setCount(count + 1)}
					className="border bg-green-600 rounded-xl w-[4rem] p-4 text-3xl cursor-pointer">
					+
				</button>
				<button
					onClick={() => setCount(count - 1)}
					className="border bg-yellow-500 rounded-xl w-[4rem] p-4 text-3xl cursor-pointer">
					-
				</button>
				<button
					onClick={() => setCount(0)}
					className="border bg-red-800 rounded-xl w-[8rem] p-4 text-3xl cursor-pointer">
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
