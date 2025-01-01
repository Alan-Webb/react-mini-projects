import Book from "./Book";

const author = "Max Brooks";
const title = "The Zombie Survival Handbook";
const img = "./src/images/book-1.jpg";

export default function BookList() {
	return (
		<section className="booklist">
			<Book img={img} title={title} author={author} />
			<Book img={img} title={title} author={author} />
			<Book img={img} title={title} author={author} />
			<Book img={img} title={title} author={author} />
		</section>
	);
}
