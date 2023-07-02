import React, { useState } from "react";
import BasicBreadCrumb from "../../../common/components/breadcrumb/breadcrumb";
import { dataAllBooks } from "../../../temp/data";
import BookCard from "../../../common/components/card/book-card";
import Filters from "../../../common/components/filters/filters";
import { Button, Drawer } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const GenresPage = () => {
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <>
      <div className="px-12 py-4 lg:px-32 lg:py-8 flex flex-col gap-4 bg-[#F7FCFF]">
        <div className="text-sm order-2 lg:order-1">
          <span className="font-bold ">Hi,</span>
          <br /> Welcome to Bookrary, in here you can search for your favourite
          genres and books!
        </div>

        <div className=" order-1 lg:order-2">
          <BasicBreadCrumb />
        </div>
        <div className="order-3">
          <div
            onClick={() => setOpenFilters(!openFilters)}
            className="flex cursor-pointer justify-between md:hidden order-3 bg-[#3BC3FF] hover:bg-white text-white hover:text-[#3BC3FF] rounded  p-2 transition-all hover:shadow-sm  mb-2"
          >
            <div className="text-sm font-semibold">Filters</div>
            <div className="flex items-center">
              <FilterOutlined />
            </div>
          </div>
          <span className={openFilters ? "block md:hidden" : "hidden"}>
            <Filters />
          </span>
        </div>

        <div className="order-4 flex flex-col mini:flex-row justify-evenly gap-x-4">
          <div className="hidden md:block w-full">
            <Filters />
          </div>

          <div className="grid grid-cols-1 mini:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mini:gap-6">
            {dataAllBooks.map((val, idx) => (
              <BookCard book={val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GenresPage;
