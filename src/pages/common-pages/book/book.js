import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import sample from "../../../assets/sample.png";
import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { filterBooksBySeller } from "../../../util/filterBooksByName";
import BooksView from "./../../../common/view/booksView";
import {
  useCart,
  useDispatchCart,
} from "../../../common/components/cart/cartProvider";

const BookPage = () => {
  const location = useLocation();
  const bookData = location.state;
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(filterBooksBySeller(bookData.seller));
  }, []);

  const dispatch = useDispatchCart();
  const cart = useCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <main className="p-12 basis-3/4 flex flex-col gap-y-8 ">
      <section className="w-full flex flex-col mini:flex-row justify-between gap-y-4 pt-4 mini:pt-12 sm:pt-0">
        <div className="name-tag flex flex-col">
          <p className="text-lg font-bold">{bookData.title}</p>
          <p className="text-sm font-normal text-gray-500">
            by <span className="underline">{bookData.author}</span>
          </p>
        </div>
        <div className="share-tag flex gap-x-2 text-base mini:text-2xl">
          <FacebookOutlined className="hover:text-blue-500" />
          <InstagramOutlined className="hover:text-purple-500" />
          <WhatsAppOutlined className="hover:text-green-400" />
          <LinkedinOutlined className="hover:text-blue-800" />
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row gap-x-4 md:pt-0">
        <div className="md:basis-4/12 flex justify-center  rounded-md ">
          <div className="border px-6 py-8 rounded-md">
            <img alt="book_cover" className="h-80" src={sample} />
          </div>
        </div>

        <div className="md:basis-7/12 flex flex-col  ">
          <div className="flex flex-col gap-y-4 ">
            <div className="text-xl text-center py-2 md:py-0 underline md:no-underline md:text-left font-semibold">
              ₺ <span className="text-2xl">{bookData.price}</span>
            </div>
            <div className="text-sm font-semibold">
              Seller:<span className="text-[#3BC2FF]"> {bookData.seller}</span>
            </div>
            <div>
              <p className="text-base font-extrabold">Description:</p>
              <p className="text-sm">
                A dystopian novel set in a future totalitarian society where the
                government constantly monitors and controls every aspect of
                citizens' lives.
              </p>
            </div>
            <div className="gap-y-2">
              <p className="text-base font-extrabold">Status:</p>

              <p className="text-sm list-inside">New condition</p>
              <p className="text-sm list-inside">New condition</p>
              <p className="text-sm list-inside">New condition</p>
            </div>
            <div>
              <p className="text-base font-extrabold">Library:</p>
              <div className="border rounded-md bg-white flex gap-2 ">
                <EnvironmentOutlined className="pl-1.5" />
                <p>{bookData.location}</p>
              </div>
            </div>
            <div>
              <p className="text-base font-extrabold">Action:</p>
              <div className="flex gap-x-4 justify-between">
                <Button
                  onClick={(event) => {
                    event.stopPropagation();
                    addToCart({ data: bookData });
                  }}
                  className="flex-1 bg-[#3BC2FF] text-white"
                  type="primary"
                >
                  Add To Cart
                </Button>
                <Button className="flex-1">Contact Seller</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24">
        <BooksView
          title={
            <span>
              More books from{" "}
              <span className="text-[#3BC2FF]">{bookData.seller}</span>
            </span>
          }
          bookData={filteredBooks}
        />
      </section>
    </main>
  );
};

export default BookPage;
