const TaskList = () => {
	return (
		<ul>
			<li className={`task`}>
				<input type="task" />
				<input type="date" />
				<select>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
				<label>
					Completed:
					<input type="checkbox" />
				</label>
				<button>Delete</button>
				<button id="archive-btn">Archive</button>
			</li>
		</ul>
	);
};
export default TaskList;
