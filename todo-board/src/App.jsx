import {useState} from "react";
import Input from "./components/Input";
import Board from "./components/Board";

export default function App() {
	const [taskList, setTaskList] = useState([]);

	return (
		<>
			<div className="flex flex-col items-center justify-center py-8 gap-4">
				<h1 className="text-xl font-semibold">Todo Board</h1>
				<Input taskList={taskList} setTaskList={setTaskList} />
			</div>
			<div>
				{taskList.map((task, index) => (
					<Board key={index} task={task} />
				))}
			</div>
		</>
	);
}
