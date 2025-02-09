import React from "react";
import "./Home.css";
import TaskForm from "/src/components/TaskForm.jsx"

function Home() {
	return (
		<div className="app">
			<h1>To-Do List</h1>
      <TaskForm/>
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
		</div>
	);
}
export default Home;
