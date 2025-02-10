import {useState} from "react";

const TaskForm = () => {
	const [description, setDescription] = useState("Random Task");

	return (
		<form>
			<input
				type="text"
				placeholder="Task Description"
				required
				value={description}
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<input type="date" required />
			<select>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
			<label>
				Completed:
				<input type="checkbox" />
			</label>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
