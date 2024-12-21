import {useState} from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: 1, text: "buy groceries", isCompleted: false},
		{id: 2, text: "do laundry", isCompleted: true},
		{id: 3, text: "exercise", isCompleted: false},
	]);

	return (
		<ul>
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]">
					<span
						className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}>
						{todo.text}
					</span>

					<DeleteButton id={todo.id} setTodos={setTodos} />
				</li>
			))}
		</ul>
	);
}
