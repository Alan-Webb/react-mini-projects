const TodoApp = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleAddTask = () => {
		// console.log(inputValue);
		const newTodo = {
			id: Date.now(),
			text: inputValue,
		};
		setTodos([newTodo, ...todos]);
		setInputValue("");
	};
	// console.log(todos);

	const handleDelete = (id) => {
		// console.log(id);
		setTodos(todos?.filter((todo) => todo?.id !== id));
	};

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
			<div className="flex flex-col items-center mt-12 space-y-4">
				{todos?.map((todo) => (
					<div
						key={todo.id}
						className="border rounded-xl w-110 p-4 flex justify-between">
						<p className="p-4">{todo.text}</p>
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

