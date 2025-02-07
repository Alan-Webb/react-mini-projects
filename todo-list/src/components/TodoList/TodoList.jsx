import React from "react";
import "./TodoList.css";

export default function TodoList() {
	return (
		<div className="container">
			<h1>To-Do List</h1>
			<div className="list-input">
				<input type="text" placeholder="Add item..." />
				<button id="submit">+</button>
			</div>
			<div className="list-items">
				<ul className="element-list">{/* render items here */}</ul>
			</div>
		</div>
	);
}
