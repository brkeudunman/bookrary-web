import { dataAllBooks } from "../temp/data";

export function filterBooksByGenre(genreName) {
  const filteredBooks = dataAllBooks.filter((book) => book.genre === genreName);
  return filteredBooks;
}
