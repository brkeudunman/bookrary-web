import { Button, Spin } from "antd";
import sample from "../../../assets/sample.png";
import React from "react";
import { useDispatchCart } from "../cart/cartProvider";

const BookCard = ({ book, background }) => {
  return (
    <div className="p-2 bg-[#FFFBEB] rounded-md hover:shadow-sm border">
      <div
        className="flex justify-center bg-cover bg-fixed text-white font-bold  px-2 "
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
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  return data ? (
    <div className="text-xs grid gap-y-3 px-2 font-normal">
      <div className="flex-1 justify-center p-10 ">
        <img src={sample} alt="" />
      </div>

      <div className="flex gap-x-3 justify-between">
        <p className="font-bold text-gray-700">{data.title}</p>
        <p className="text-gray-500">{data.author}</p>
      </div>
      <div className="flex">
        <div>
          <p className="text-black">{data.location}</p>
          <p className="text-[#3BC3FF] ">{data.seller}</p>
        </div>
      </div>
      <div className="self-center">
        <p className="text-black text-base">{data.price}TL</p>
      </div>

      <Button
        onClick={() => addToCart({ data })}
        className="bg-white border border-black flex-1 w-full"
      >
        Add To Cart
      </Button>
    </div>
  ) : (
    <Spin />
  );
};
