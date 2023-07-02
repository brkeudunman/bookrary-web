import { Col, Row } from "antd";
import BookCard from "./../components/card/book-card";
const BooksView = ({ bookData, title }) => {
  return (
    <div className="bg-white py-10 px-14">
      <p className="mb-8 text-lg font-bold">{title}</p>
      <Row className={" no-scrollbar flex-nowrap overflow-x-scroll gap-x-4 "}>
        {bookData.map((book, idx) => (
          <Col span={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BooksView;
