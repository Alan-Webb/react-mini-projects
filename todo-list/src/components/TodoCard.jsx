const TodoCard = (props) => {
	const {children} = props;

	return (
		<li className="todo-item">
			{children}
			<div className="actions-container">
				<i className="fa-solid fa-pen-to-square"></i>
				<i className="fa-solid fa-trash-can"></i>
			</div>
		</li>
	);
};

export default TodoCard;
