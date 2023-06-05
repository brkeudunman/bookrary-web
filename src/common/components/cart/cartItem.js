import React from "react";
import sample from "../../../assets/book_cover.jpg";
import { BookOutlined } from "@ant-design/icons";
import { BookmarkIcon } from "../../../assets/icons/icons";

const CartItem = () => {
  return (
    <div className=" flex my-14 mx-10 ">
      <div className="bg-white px-10 py-4 rounded-md mr-4">
        <img src={sample} alt="" width={"110px"} height={"130"} />
      </div>
      <div className="bg-white flex justify-between px-10 py-4 rounded-md leading-normal">
        <div className="flex items-start flex-col">
          <div className="mb-3 flex flex-col items-start">
            <h1>Title of the Book</h1>
            <h2>Author of the Book</h2>
          </div>
          <div className="mb-3 flex flex-col items-start">
            <h2>Location of the Library</h2>
            <h3 className="text-[#7AD6FF]">Owner of the Book</h3>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-wrap justify-between mr-10">
              <BookmarkIcon />
              <p className="flex flex-wrap underline ml-2">
                Add to favourites and save it for next shopping!
              </p>
            </div>
            <p className="bg-[#7AD6FF] px-4 py-2 rounded-md">XXX TL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
