import { Button, Spin } from "antd";
import sample from "../../../assets/sample.png";
import React from "react";
import { useDispatchCart } from "../cart/cartProvider";
import { Link, useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="p-2 h-full  bg-[#FFFBEB] rounded-md hover:shadow-md border">
      <ItemContent data={book} />
    </div>
  );
};

export default BookCard;

const ItemContent = ({ data }) => {
  const navigate = useNavigate();
  const navigateToBook = () => {
    navigate(`/book/${data.id}`, {
      state: data,
    });
  };
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  return data ? (
    <div
      className="flex flex-col justify-between text-xs gap-y-3 px-2 font-normal h-full cursor-pointer"
      onClick={() => navigateToBook(data.id)}
    >
      <div className="p-6">
        <img src={sample} alt="" />
      </div>

      <div className="flex flex-wrap flex-col gap-x-3">
        <p className="font-bold text-gray-700 flex-wrap">{data.title}</p>
        <p className="text-gray-500">{data.author}</p>
      </div>
      <div className="">
        <p className="text-black">{data.location}</p>
        <div className="flex flex-col mini:flex-row justify-between lg:gap-8">
          <p className="text-[#3BC3FF] ">{data.seller}</p>
          <p className="text-black text-base ">{data.price}TL</p>
        </div>
      </div>

      <Button
        onClick={(event) => {
          event.stopPropagation();
          addToCart({ data });
        }}
        className="bg-white border border-black z-20"
      >
        Add To Cart
      </Button>
    </div>
  ) : (
    <Spin />
  );
};
