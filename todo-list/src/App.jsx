import {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([
		"Go to the gym",
		"Eat more fruits and veg",
		"Pick up kids from school",
	]);

	return (
		<>
			<TodoInput />
			<TodoList todos={todos} />
		</>
	);
};

export default App;
