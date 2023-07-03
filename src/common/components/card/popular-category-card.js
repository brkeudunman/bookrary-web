import React from "react";

const PopularCategory = ({ background, data }) => {
  return (
    <div className="inline-block p-2  bg-[#FFFBEB] rounded-md hover:shadow-md">
      <div
        className="flex h-full p-6 items-center justify-center bg-cover bg-fixed text-white font-bold  "
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <p className="md:whitespace-nowrap">{data.name}</p>
      </div>
    </div>
  );
};

export default PopularCategory;
