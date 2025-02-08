import React from "react";
import {useState} from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
	const startingData = [
		{title: "#1 task", id: Date.now() + 1},
		{title: "#2 task", id: Date.now() + 2},
		{title: "#3 task", id: Date.now() + 3},
		{title: "#4 task", id: Date.now() + 4},
	];

	const [currentItems, setCurrentItems] = useState(startingData);

	return (
		<div className="container">
			<h1>To-Do List</h1>
			<div className="list-input">
				<input type="text" placeholder="Add item..." />
				<button id="submit">+</button>
			</div>
			<div className="list-items">
				<ul className="element-list">
					{currentItems.map((item) => {
						<TodoItem></TodoItem>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
