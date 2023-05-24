import React from "react";
import BasicCard from "../components/card/basic-card";

const CardsView = ({ data, title, background, isTop }) => {
  return (
    <div className="bg-white py-10 px-14">
      <p className="mb-8 font-bold">{title}</p>
      <div
        className={
          isTop
            ? ` grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6`
            : "flex flex-row overflow-x-scroll gap-x-4 flex-nowrap"
        }
      >
        {data.map((val, idx) => (
          <BasicCard isTop={isTop} background={background}>
            {val}
          </BasicCard>
        ))}
      </div>
    </div>
  );
};

export default CardsView;
