export default function Book(props) {
	const {img, title, author, number} = props;

	return (
		<article>
			<img src={img} alt={title} />
			<h4>{author}</h4>
			<span className="number">{`# ${number + 1}`}</span>
			<h2>{title}</h2>
		</article>
	);
}
