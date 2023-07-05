import React, { useEffect, useState } from "react";
import BasicBreadCrumb from "../../../common/components/breadcrumb/breadcrumb";
import { dataAllBooks } from "../../../temp/data";
import BookCard from "../../../common/components/card/book-card";
import Filters from "../../../common/components/filters/filters";
import { FilterOutlined } from "@ant-design/icons";
import { filterBooksByGenre } from "./../../../util/filterBooksByGenre";
import { filterBooksByAuthors } from "../../../util/filterBooksByAuthors";

const GenresPage = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [booksData, setBooksData] = useState(dataAllBooks);
  const [selectedGenres, setSelectedGenres] = useState([""]);
  const [selectedAuthors, setSelectedAuthors] = useState([""]);

  const handleGenreChange = (selectedValues) => {
    setSelectedGenres(selectedValues);

    // If no genres are selected, show all books
    if (selectedValues.length === 0) {
      setBooksData(dataAllBooks);
    } else {
      // Perform filtering logic using selected genres
      setBooksData(filterBooksByGenre(selectedValues));
    }
  };
  const handleAuthorChange = (selectedValues) => {
    setSelectedAuthors(selectedValues);

    // If no genres are selected, show all books
    if (selectedValues.length === 0) {
      setBooksData(dataAllBooks);
    } else {
      // Perform filtering logic using selected genres
      setBooksData(filterBooksByAuthors(selectedValues));
    }
  };

  useEffect(() => {
    console.log("BookSS", booksData);
  }, [booksData]);

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
            <Filters
              handleAuthorChange={handleAuthorChange}
              handleGenreChange={handleGenreChange}
            />
          </span>
        </div>

        <div className="order-4 justify-between gap-x-4 grid grid-cols-4">
          <div className="hidden row-span-2 md:block ">
            <Filters
              handleAuthorChange={handleAuthorChange}
              handleGenreChange={handleGenreChange}
            />
          </div>

          <div className="grid mini:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-x-3 gap-y-4 col-span-4  md:col-span-3">
            {booksData.map((book) => (
              <div className="">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GenresPage;
