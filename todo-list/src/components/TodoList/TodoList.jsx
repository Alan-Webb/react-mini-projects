import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
	return (
		<div className="container">
			<h1>To-Do List</h1>
			<div className="list-input">
				<input type="text" placeholder="Add item..." />
				<button id="submit">+</button>
			</div>
			<div className="list-items">
				<ul className="element-list">
					<TodoItem></TodoItem>
					<TodoItem></TodoItem>
					<TodoItem></TodoItem>
					<TodoItem></TodoItem>
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
