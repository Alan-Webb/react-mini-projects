export default function Book({img, title, author, children}) {
	return (
		<article>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			{children}
		</article>
	);
}
