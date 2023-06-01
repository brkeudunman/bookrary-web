import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "320px",
  color: "#fff",
  background: "",
  borderRadius: "16px",
};

const BasicCarousel = () => {
  return (
    <Carousel autoplaySpeed={5000} autoplay>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFF4C6]"
          style={contentStyle}
        >
          <p className="text-2xl md:text-4xl underline text-[#3BC3FF]">
            How To?
          </p>
          <span className="md:text-2xl flex gap-3 overflow-scroll md:overflow-auto">
            <p className="flex-wrap scroll text-[#3BC3FF]">
              1 - You can search for the books you want to purchase and when you
              find them, you can add them to your cart and purchase them.
            </p>
          </span>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFF0B4]"
          style={contentStyle}
        >
          <p className="text-2xl md:text-4xl underline text-[#3BC3FF]">
            How To?
          </p>
          <span className="md:text-2xl flex gap-3 overflow-scroll md:overflow-auto text-[#3BC3FF]">
            <p>
              2 - After the purchase, you need to collect your new books within
              three hours from the library that the seller decided.
            </p>
          </span>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFEB9D]"
          style={contentStyle}
        >
          <p className="text-2xl md:text-4xl underline text-[#3BC3FF]">
            How To?
          </p>
          <span className="md:text-2xl flex gap-3 overflow-scroll md:overflow-auto text-[#3BC3FF]">
            <p>
              3 - If you can not collect your newly purchased books in three
              hours, conguratulations!!! You do not need to worry, you just
              donated those books to the stated library.
            </p>
          </span>
        </div>
      </div>
    </Carousel>
  );
};

export default BasicCarousel;
