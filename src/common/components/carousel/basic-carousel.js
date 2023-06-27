import { Carousel } from "antd";
import React from "react";

const BasicCarousel = () => {
  return (
    <Carousel className="" autoplaySpeed={5000} autoplay>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFF4C6] h-full bg-cover bg-fixed"
          style={{
            height: "320px",
            color: "#fff",
            background: "",
            borderRadius: "16px",
            backgroundImage: `url(${"https://th.bing.com/th/id/OIG.pBI3BIBactyruJnhHu3J?pid=ImgGn"})`,
          }}
        >
          <p className="text-2xl md:text-4xl underline text-[#FFEB9D]">
            How To?
          </p>
          <span className="h-full md:text-2xl flex gap-3 overflow-scroll md:overflow-auto">
            <p className="flex-wrap scroll text-[#ffffff]">
              1 - You can search for the books you want to purchase and when you
              find them, you can add them to your cart and purchase them.
            </p>
          </span>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFF0B4] bg-cover bg-fixed"
          style={{
            height: "320px",
            color: "#fff",
            background: "",
            borderRadius: "16px",

            backgroundImage: `url(${"https://th.bing.com/th/id/OIG.QJ95SoXswvdSPA0OW9ld?pid=ImgGn"})`,
          }}
        >
          <p className="text-2xl md:text-4xl underline text-[#FFEB9D]">
            How To?
          </p>
          <span className="h-full md:text-2xl flex gap-3 overflow-scroll md:overflow-auto text-[#ffffff]">
            <p>
              2 - After the purchase, you need to collect your new books within
              three hours from the library that the seller decided.
            </p>
          </span>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFEB9D] bg-cover bg-fixed"
          style={{
            height: "320px",
            color: "#fff",
            background: "",
            borderRadius: "16px",

            backgroundImage: `url(${"https://th.bing.com/th/id/OIG.RRMiCCBudsPTOD8R6gxz?pid=ImgGn"})`,
          }}
        >
          <p className="text-2xl md:text-4xl underline text-[#FFEB9D]">
            How To?
          </p>
          <span className="h-full md:text-2xl flex gap-3 overflow-scroll md:overflow-auto text-[#ffffff]">
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
