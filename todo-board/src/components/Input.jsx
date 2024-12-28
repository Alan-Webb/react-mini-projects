import {useState} from "react";

export default function Input({taskList, setTaskList}) {
	const [input, setInput] = useState("");
	const handleAddTask = (e) => {
		e.preventDefault();
		setTaskList([...taskList, input]);
		setInput("");
	};

	return (
		<>
			<form>
				<input
					className="border rounded px-2"
					type="text"
					placeholder="Add a task"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={handleAddTask}>Add</button>
			</form>
		</>
	);
}
