export default function Button(props) {
	const {text} = props;

	return (
		<button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blue-shadow duration-200">
			<p>{text}</p>
		</button>
	);
}
