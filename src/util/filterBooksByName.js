import { dataAllBooks } from "../temp/data";

export function filterBooksBySeller(sellerName) {
    const filteredBooks = dataAllBooks.filter((book) => {
      return book.seller === sellerName;
    });
  
    return filteredBooks;
}