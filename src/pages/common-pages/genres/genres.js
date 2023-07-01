import React from "react";
import BasicBreadCrumb from "../../../common/components/breadcrumb/breadcrumb";
import { dataAllBooks } from "../../../temp/data";
import BookCard from "../../../common/components/card/book-card";
import Filters from "../../../common/components/filters/filters";

const GenresPage = () => {
  return (
    <div className="px-12 py-4 lg:px-32 lg:py-8 flex flex-col gap-4 bg-[#F7FCFF]">
      <div className="text-sm order-2 lg:order-1">
        <span className="font-bold ">Hi,</span>
        <br />
        <br /> Welcome to Bookrary, in here you can search for your favourite
        genres and books!
      </div>

      <div className=" order-1 lg:order-2">
        <BasicBreadCrumb />
      </div>

      <div className="order-3 flex flex-col mini:flex-row justify-evenly gap-x-4">
        <div>
          <Filters />
        </div>

        <div className="grid grid-cols-2 mini:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mini:gap-6">
          {dataAllBooks.map((val, idx) => (
            <BookCard book={val} />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default GenresPage;
