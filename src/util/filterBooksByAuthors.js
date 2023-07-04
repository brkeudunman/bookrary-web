import { dataAllBooks } from "../temp/data";

export function filterBooksByAuthors(authorsNameArray) {
  const filteredBooks = dataAllBooks.filter((book) => authorsNameArray.includes(book.author));
  return filteredBooks;
}
