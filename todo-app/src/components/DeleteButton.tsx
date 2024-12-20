export default function DeleteButton({setTodos}) {
	return (
		<button
			onClick={() => {
				setTodos((prev) => prev.filter((todo) => todo.id !== todo.id));
			}}>
			❌
		</button>
	);
}
