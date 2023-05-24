import { Button } from "antd";
import sample from "../../../assets/sample.png";
import React from "react";

const BasicCard = ({ children, background, isTop }) => {
  return (
    <div className="inline-block p-2 bg-[#F4E3B9] rounded-md">
      <div
        className="flex justify-center bg-cover bg-fixed text-white font-bold  "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {isTop ? (
          <span className="p-10">{children}</span>
        ) : (
          <ItemContent
            title={children.title}
            location={children.location}
            seller={children.seller}
            author={children.author}
          />
        )}
      </div>
    </div>
  );
};

export default BasicCard;

const ItemContent = ({ title, author, location, seller }) => {
  return (
    <span className="text-xs grid gap-y-3 p-1 font-normal">
      <div className="flex-1 justify-center p-10 ">
        <img src={sample} alt=""  />
      </div>

      <div className="flex gap-x-3 justify-between">
        <p className="font-bold">{title}</p>
        <p>{author}</p>
      </div>
      <div>
        <p>{location}</p>
        <p className="text-[#3BC3FF] ">{seller}</p>
      </div>
      <Button className="bg-white border border-black flex-1 w-full">
        Add To Cart
      </Button>
    </span>
  );
};
