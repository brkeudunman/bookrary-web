import React from "react";
import { useLocation } from "react-router-dom";
import sample from "../../../assets/sample.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const BookPage = () => {
  const location = useLocation();
  const bookData = location.state;

  return (
    <main className="p-12 basis-3/4 flex flex-col gap-y-8">
      <section className="w-full flex flex-col mini:flex-row justify-between gap-y-4">
        <div className="name-tag flex flex-col">
          <p className="text-lg font-bold">{bookData.title}</p>
          <p className="text-sm font-normal text-gray-500">
            by <span className="underline">{bookData.author}</span>
          </p>
        </div>
        <div className="share-tag flex gap-x-2 text-base mini:text-2xl">
          <FacebookOutlined />
          <InstagramOutlined />
          <WhatsAppOutlined />
          <LinkedinOutlined />
        </div>
      </section>

      <section className="w-full flex">
        <div className="basis-4/12 flex justify-center border rounded-md py-4">
          <img alt="book_cover" className="h-80" src={sample} />
        </div>
        <div className="basis-7/12 flex flex-col">
          <div className="flex flex-col gap-y-4">
            <div className="text-xl font-semibold">
              ₺<span className="text-2xl">{bookData.price}</span>
            </div>
            <div className="text-sm font-semibold">
              Seller:<span className="text-blue-400"> {bookData.seller}</span>
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
              <p className="text-base font-extrabold">Action:</p>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <p className="text-xl font-bold">
          More books from{" "}
          <span className="text-[#3BC2FF]">{bookData.seller}</span>
        </p>
      </section>
    </main>
  );
};

export default BookPage;
