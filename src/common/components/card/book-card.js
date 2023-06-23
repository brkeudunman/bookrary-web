import { Button, Spin } from "antd";
import sample from "../../../assets/sample.png";
import React from "react";

const BookCard = ({ book, background }) => {
  return (
    <div className="inline-block p-2 bg-[#FFFBEB] rounded-md">
      <div
        className="flex justify-center bg-cover bg-fixed text-white font-bold  "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <ItemContent data={book} />
      </div>
    </div>
  );
};

export default BookCard;

const ItemContent = ({ data }) => {
  return data ? (
    <span className="text-xs grid gap-y-3 p-1 font-normal">
      <div className="flex-1 justify-center p-10 ">
        <img src={sample} alt="" />
      </div>

      <div className="flex gap-x-3 justify-between">
        <p className="font-bold text-gray-700">{data.title}</p>
        <p className="text-gray-500">{data.author}</p>
      </div>
      <div>
        <p className="text-black">{data.location}</p>
        <p className="text-[#3BC3FF] ">{data.seller}</p>
      </div>
      <Button className="bg-white border border-black flex-1 w-full">
        Add To Cart
      </Button>
    </span>
  ) : (
    <Spin />
  );
};
