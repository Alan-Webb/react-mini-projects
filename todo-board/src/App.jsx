import {useState} from "react";
import Input from "./components/Input";

export default function App() {
	const [taskList, setTaskList] = useState([]);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="font-semibold">Todo Board</h1>
			<Input taskList={taskList} setTaskList={setTaskList} />
			<div>
				{taskList.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</div>
		</div>
	);
}
