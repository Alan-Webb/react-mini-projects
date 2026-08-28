import {useState} from "react";

const TodoApp = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

	const handleAddTask = () => {
		// console.log(inputValue);
		const newTodo = {
			id: Date.now(),
			text: inputValue,
			completed: false,
		};
		setTodos([newTodo, ...todos]);
		setInputValue("");
	};
	// console.log(todos);

	const handleDelete = (id) => {
		// console.log(id);
		setTodos(todos?.filter((todo) => todo?.id !== id));
	};

	const toggleTodo = (id) => {
		// console.log(id);
		setTodos(
			todos?.map((todo) =>
				todo?.id === id ? {...todo, completed: !todo.completed} : todo,
			),
		);
	};

	// console.log(filter);
	const filteredTodos = todos?.filter((todo) => {
		if (filter === "pending") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return todo;
	});

	return (
		<div className="flex flex-col items-center text-2xl mt-12">
			<div className="flex space-x-3">
				<input
					type="text"
					name="add-todo"
					placeholder="Enter your task..."
					className="border rounded-xl p-3"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					onClick={handleAddTask}
					className="border rounded-xl p-3 cursor-pointer">
					Add Todo
				</button>
			</div>
			{/* Filter Buttons */}
			<div className="flex space-x-3 mt-6">
				<button
					onClick={() => setFilter("all")}
					className={`border rounded-xl p-4 cursor-pointer ${filter === "all" ? "bg-red-800" : ""}`}>
					All
				</button>
				<button
					onClick={() => setFilter("pending")}
					className={`border rounded-xl p-4 cursor-pointer ${filter === "pending" ? "bg-red-800" : ""}`}>
					Pending
				</button>
				<button
					onClick={() => setFilter("completed")}
					className={`border rounded-xl p-4 cursor-pointer ${filter === "completed" ? "bg-red-800" : ""}`}>
					Completed
				</button>
			</div>
			{/* Todo Render */}
			<div className="flex flex-col items-center mt-12 space-y-4">
				{filteredTodos?.map((todo) => (
					<div
						key={todo.id}
						className="border rounded-xl w-130 p-4 flex justify-between">
						<div className="flex">
							<input
								type="checkbox"
								onChange={() => toggleTodo(todo?.id)}
								className="cursor-pointer"
							/>
							<p className={`p-4 ${todo.completed ? "line-through" : ""}`}>
								{todo.text}
							</p>
						</div>
						<button
							onClick={() => handleDelete(todo?.id)}
							className="border rounded-xl p-3 cursor-pointer">
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoApp;
