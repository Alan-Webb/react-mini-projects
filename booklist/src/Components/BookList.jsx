import Book from "./Book";

const firstBook = {
	author: "Max Brooks",
	title: "The Zombie Survival Handbook",
	img: "./src/images/book-1.jpg",
};

const secondBook = {
	author: "Sun Tzu",
	title: "The Art of War",
	img: "./src/images/book-2.jpg",
};

export default function BookList() {
	return (
		<section className="booklist">
			<Book
				author={firstBook.author}
				title={firstBook.title}
				img={firstBook.img}>
				{/* <p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iste
					nulla earum praesentium quibusdam. Voluptate sed tenetur in. Soluta
					enim, nihil inventore nulla maiores veritatis!
				</p>
				<button>Click me!!</button> */}
			</Book>
			<Book
				author={secondBook.author}
				title={secondBook.title}
				img={secondBook.img}
			/>
		</section>
	);
}
