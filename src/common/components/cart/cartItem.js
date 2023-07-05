import React from "react";
import sample from "../../../assets/sample.png";
import { BookmarkIcon } from "../../../assets/icons/icons";
import { Button } from "antd";

const CartItem = ({ bookData, index, handleRemove }) => {
  const data = bookData.data;
  
  return (
    <div className="w-full block md:flex md:w-full md:p-0">
      <div className="bg-white p-2 sm:p-6 md:p-2 rounded-t-md flex flex-col justify-center  ">
        <img
          className="rounded-t-md md:rounded-md w-full md:w-40"
          src={sample}
          alt=""
        />
      </div>
      <div className="bg-white w-full flex md:block justify-between p-2 sm:p-6 md:p-2 rounded-md  rounded-t-none leading-normal">
        <div className="flex items-start flex-col gap-y-2 w-full h-full justify-between">
          <div className="flex flex-col items-start ">
            <strong>{data.title}</strong>
            <h2>{data.author}</h2>
          </div>
          <div className="flex flex-col items-start ">
            <strong className="text-start">{data.location}</strong>
            <h3 className="text-[#7AD6FF]">{data.seller}</h3>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex gap-1">
              <BookmarkIcon />
              <span className="flex items-center text-xs">
                Add to favourites and save it for next shopping!
              </span>
            </div>
          </div>
          <div className="flex mt-2 justify-between w-full self-end justify-self-end">
            <p className="bg-[#7cd8ff]  text-white font-bold border px-2 py-1 rounded-md">
              {data.price} TL
            </p>
            <Button
              onClick={handleRemove}
              danger
              className="h-full font-bold"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
