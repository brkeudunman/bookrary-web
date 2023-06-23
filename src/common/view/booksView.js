import BookCard from "./../components/card/book-card";
const BooksView = ({ bookData, title }) => {
  return (
    <div className="bg-white py-10 px-14">
      <p className="mb-8 text-lg font-bold">{title}</p>
      <div className={" no-scrollbar flex flex-row overflow-x-scroll gap-x-4 flex-nowrap"}>
        {bookData.map((book, idx) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksView;
