import {useState} from "react";

const TaskForm = () => {
	const [description, setDescription] = useState("");
	const [deadline, setDeadline] = useState("");
	const [priority, setPriority] = useState("low");
	const [completed, setCompleted] = useState(false);

	const handelSubmit = (e) => {
		e.preventDefault();
		const newTask = {
			id: Date.now(),
			description,
			deadline,
			priority,
			completed,
		};
		console.log(newTask);
	};

	return (
		<form onSubmit={handelSubmit}>
			<input
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				type="text"
				placeholder="Task Description"
				required
			/>
			<input
				value={deadline}
				onChange={(e) => setDeadline(e.target.value)}
				type="date"
				required
			/>
			<select value={priority} onChange={(e) => setPriority(e.target.value)}>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
			<label>
				Completed:
				<input
					value={completed}
					onChange={(e) => setCompleted(e.target.completed)}
					type="checkbox"
				/>
			</label>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
