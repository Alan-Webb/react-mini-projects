import Book from "./Book";
import {books} from "./Books";

export default function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
}
