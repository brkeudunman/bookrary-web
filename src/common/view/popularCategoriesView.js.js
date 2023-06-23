import React from "react";
import PopularCategory from "../components/card/popular-category-card";

const PopularCategoryView = ({ categoriesData, title, background }) => {
  return (
    <div className="bg-white py-10 px-14">
      <p className="mb-8 font-bold text-lg">{title}</p>
      <div
        className={` grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6`}
      >
        {categoriesData.map((val, idx) => (
          <PopularCategory data={val} background={background}/>
        ))}
      </div>
    </div>
  );
};

export default PopularCategoryView;
