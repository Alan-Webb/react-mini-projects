import React, {useState} from "react";
import "./TodoItem.css";
import Checker from "/src/assets/Checker.png";

const TodoItem = () => {
	const [isChecked, setChecked] = useState(false);

	return (
		<div className="wrapper">
			<button
				onClick={() => setChecked(!isChecked)}
				className={"checker" + (isChecked ? "active" : "")}
				style={{backgroundImage: isChecked ? `url(${Checker})` : ""}}></button>
			<li style={{textDecoration: isChecked ? `line-through` : ""}}>
				Title Here
			</li>
			<button className="delete">X</button>
		</div>
	);
};

export default TodoItem;
