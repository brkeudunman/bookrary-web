import React from "react";

const PopularCategory = ({ background, data }) => {
  return (
    <div className="inline-block p-2  bg-[#FFFBEB] rounded-md hover:shadow-md">
      <div
        className="flex justify-center bg-cover bg-fixed text-white font-bold  "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <span className=" p-10">{data}</span>
      </div>
    </div>
  );
};

export default PopularCategory;
