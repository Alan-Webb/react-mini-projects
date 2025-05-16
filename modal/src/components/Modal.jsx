// 1. Div in div. Add id check to main div & pass in props.

// 2. Create div wrapped h2, p & footer. Add span & ? checks to each.

const Modal = ({id, header, body, footer}) => {
	return (
		<div
			id={id || "modal"}
			className="flex flex-col items-center gap-4 text-center text-3xl border w-[40rem] rounded-xl p-6">
			<div>
				<span>&times;</span>
				<h2 className="font-bold border-b p-4">{header ? header : "Header"}</h2>
			</div>
			<div>
				<p className="py-12">{body ? body : "Body"}</p>
			</div>
			<div>
				<footer className="font-bold border-t p-4">
					{footer ? footer : "Footer"}
				</footer>
			</div>
		</div>
	);
};

export default Modal;
