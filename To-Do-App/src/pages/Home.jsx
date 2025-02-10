import React, {useState} from "react";
import "./Home.css";
import TaskForm from "/src/components/TaskForm.jsx";
import TaskList from "/src/components/TaskList.jsx";

function Home() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			description: "First Task Dynamic",
			deadline: "12-03-2025",
			priority: "low",
			completed: false,
		},
		{
			id: 2,
			description: "Second Task Dynamic",
			deadline: "12-03-2025",
			priority: "medium",
			completed: false,
		},
		{
			id: 3,
			description: "Third Task Dynamic",
			deadline: "12-03-2025",
			priority: "high",
			completed: false,
		},
	]);

	const updateTask = (updatedTask) => {
		setTasks(
			tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
	};
	return (
		<div className="app">
			<h1>To-Do List</h1>
			<TaskForm></TaskForm>
			<div className="filters">
				<label>
					Completion:
					<select>
						<option value="all">All</option>
						<option value="true">Completed</option>
						<option value="false">Incomplete</option>
					</select>
				</label>
				<label>
					Priority:
					<select>
						<option value="all">All</option>
						<option value="high">High</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</label>
				<label>
					Deadline:
					<input type="date" />
				</label>
			</div>
			<TaskList updateTask={updateTask} tasks={tasks}></TaskList>
		</div>
	);
}
export default Home;
