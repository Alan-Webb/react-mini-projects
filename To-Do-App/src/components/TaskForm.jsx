import React from "react";

const TaskForm = () => {
	return (
		<form>
			<input type="text" placeholder="Task Description" required />
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
