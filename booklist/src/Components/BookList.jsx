import Book from "./Book";
import {books} from "./Books";

export default function BookList() {
	return (
		<>
			<h1>Best sellers</h1>
			<section className="booklist">
				{books.map((book, index) => {
					return <Book {...book} key={book.id} number={index} />;
				})}
			</section>
		</>
	);
}
