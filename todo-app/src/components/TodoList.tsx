const initialTodos = ["buy groceries", "Walk the dog", "Do laundry"];

export default function TodoList() {
	return (
		<ul>
			{initialTodos.map((todo) => (
				<li className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]">
					<span>{todo}</span>
					<button>❌</button>
				</li>
			))}
		</ul>
	);
}
