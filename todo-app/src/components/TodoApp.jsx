import {useState} from "react";

const TodoApp = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleAddTask = () =>{

	}

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
				className="border rounded-xl p-3 cursor-pointer	">
					Add Todo
				</button>
			</div>
			<div>
				Todo List
				<div>Todo Item</div>
			</div>
		</div>
	);
};

export default TodoApp;
