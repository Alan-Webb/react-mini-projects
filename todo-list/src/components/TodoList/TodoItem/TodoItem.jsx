import React, {useState} from "react";
import "./TodoItem.css";
import Checker from "/src/assets/Checker.png";

export default function TodoItem() {
	return (
		<div className="wrapper">
			<button className="checker"></button>
			<li>Title Here</li>
			<button className="delete"></button>
		</div>
	);
}
