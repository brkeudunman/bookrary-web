import { Button, Spin } from "antd";
import sample from "../../../assets/sample.png";
import React from "react";
import { useDispatchCart } from "../cart/cartProvider";

const BookCard = ({ book }) => {
  return (
    <div className="p-2 bg-[#FFFBEB] rounded-md hover:shadow-md border">
      <ItemContent data={book} />
    </div>
  );
};

export default BookCard;

const ItemContent = ({ data }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  return data ? (
    <div className="flex flex-col justify-between text-xs gap-y-3 px-2 font-normal h-full">
      <div className="p-6">
        <img src={sample} alt="" />
      </div>

      <div className="flex flex-wrap flex-col gap-x-3">
        <p className="font-bold text-gray-700 flex-wrap">{data.title}</p>
        <p className="text-gray-500">{data.author}</p>
      </div>
      <div className="">
        <p className="text-black">{data.location}</p>
        <div className="flex gap-8">
          <p className="text-[#3BC3FF] ">{data.seller}</p>
          <p className="text-black text-base">{data.price}TL</p>
        </div>
      </div>

      <Button
        onClick={() => addToCart({ data })}
        className="bg-white border border-black  "
      >
        Add To Cart
      </Button>
    </div>
  ) : (
    <Spin />
  );
};
