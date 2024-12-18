import {useState} from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: 1, text: "buy groceries", isCompleted: false},
		{id: 2, text: "Do laundry", isCompleted: true},
		{id: 3, text: "Exercise", isCompleted: false},
	]);

	return (
		<ul>
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
					onClick={() => {
						setTodos(
							todos.map((todo) => {
								return {
									...todo,
									isCompleted: true,
								};
							})
						);
					}}>
					<span
						className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}>
						{todo.text}
					</span>
					<DeleteButton />
				</li>
			))}
		</ul>
	);
}
