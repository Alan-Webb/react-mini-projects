export default function Book(props) {
	return (
		<article>
			<img src={props.img} alt={props.title} />
			<h2>{props.title}</h2>
			<h4>{props.author}</h4>
		</article>
	);
}
