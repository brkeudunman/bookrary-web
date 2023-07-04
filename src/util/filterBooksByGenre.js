import { dataAllBooks } from "../temp/data";

export function filterBooksByGenre(genreNamesArray) {
  const filteredBooks = dataAllBooks.filter((book) => genreNamesArray.includes(book.genre));
  return filteredBooks;
}
