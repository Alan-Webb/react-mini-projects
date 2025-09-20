import {useEffect, useState} from "react";

const TodoList = () => {
	const [todoData, setTodoData] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		const savedTodoData = localStorage.getItem("todo-data");

		if (savedTodoData) {
			setTodoData(JSON.parse(savedTodoData));
		} else {
			localStorage.setItem("todo-data", JSON.stringify([]));
		}
	}, []);

	function handleAddTodo() {
		const newTodo = {text: input};
		const updatedTodoList = [...todoData, newTodo];
		setTodoData(updatedTodoList);
		localStorage.setItem("todo-data", JSON.stringify(updatedTodoList));
		setInput("");
	}

	function handleDeleteTodo(index) {
		const updateTodoData = [...todoData];
		updateTodoData.splice(index, 1);
		setTodoData(updateTodoData);
		localStorage.setItem("todo-data", JSON.stringify(updateTodoData));
	}

	return (
		<div className="flex flex-col items-center text-2xl mt-12">
			<div>
				<input
					type="text"
					name="add-todo"
					placeholder="Enter todo details"
					className="border rounded-xl p-4"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					onClick={() => handleAddTodo()}
					className="border rounded-xl p-4 ms-4 cursor-pointer">
					Add Todo
				</button>
				{todoData.length > 0 ? (
					<div className="flex flex-col items-center mt-6">
						{todoData.map((todo, index) => (
							<div
								key={index}
								className="flex justify-between border w-[34rem] rounded-xl p-2">
								<p className="p-3">{todo.text}</p>
								<button
									onClick={() => handleDeleteTodo(index)}
									className="border rounded-xl p-4 ms-4 cursor-pointer">
									Delete
								</button>
							</div>
						))}
					</div>
				) : (
					<p className="text-center mt-6 text-4xl">Add new todo</p>
				)}
			</div>
		</div>
	);
};
export default TodoList;
