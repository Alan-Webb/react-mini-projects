export default function DeleteButton() {
	return (
		<button
			onClick={() => {
				setTodos(todos.filter((t) => t.id !== todo.id));
			}}>
			❌
		</button>
	);
}
