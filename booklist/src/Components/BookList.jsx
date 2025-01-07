import Book from "./Book";

const books = [
	{
		author: "Max Brooks",
		title: "The Zombie Survival Handbook",
		img: "./src/images/book-1.jpg",
		id: 1,
	},

	{
		author: "Sun Tzu",
		title: "The Art of War",
		img: "./src/images/book-2.jpg",
		id: 2,
	},
];

export default function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
}
