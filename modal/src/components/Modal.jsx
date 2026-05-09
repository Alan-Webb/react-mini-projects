
const Modal = ({id, header, body, footer}) => {
	return (
		<div id={id || "modal"} className="border w-110 mt-8 rounded-xl p-8">
			<div className="border-b">
				<h2>{header ? header : "Header"}</h2>
			</div>
			<div>
				<p className="py-12">{body ? body : "Body"}</p>
			</div>
			<div className="border-t mt-4">{footer ? footer : "Footer"}</div>
		</div>
	);
};

export default Modal;
