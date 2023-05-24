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
    <Carousel autoplaySpeed={2000} autoplay>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFF4C6]"
          style={contentStyle}
        >
          <p className="text-2xl md:text-4xl">How To?</p>
          <span className="md:text-lg flex gap-3 overflow-scroll md:overflow-auto">
            <p className="flex-wrap scroll">
              1 - Lorem ipsum dolor sit amet, Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit quiea commodi consequatur? Quis autem vel eum iure
              reprehenderit qea commodi consequatur? Quis autem vel eum iure
              reprehenderit q
            </p>
          </span>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFF0B4]"
          style={contentStyle}
        >
          <p className="text-2xl md:text-4xl">How To?</p>
          <span className="md:text-lg flex gap-3 overflow-scroll md:overflow-auto">
            <p>
              2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusm eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias exceptu
            </p>
          </span>
        </div>
      </div>
      <div>
        <div
          className="flex flex-col gap-5 p-12 font-montserrat font-bold bg-[#FFEB9D]"
          style={contentStyle}
        >
          <p className="text-2xl md:text-4xl">How To?</p>
          <span className="md:text-lg flex gap-3 overflow-scroll md:overflow-auto">
            <p>
              3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusm ed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto be
            </p>
          </span>
        </div>
      </div>
    </Carousel>
  );
};

export default BasicCarousel;
