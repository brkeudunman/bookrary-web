import React from "react";
import BasicCarousel from "../../../common/components/carousel/basic-carousel";
import { mainAuthors, topBooks, topGenres } from "../../../temp/data";
import BooksView from "./../../../common/view/booksView";
import PopularCategoryView from "../../../common/view/popularCategoriesView.js";

const Home = () => {
  return (
    <div className=" ">
      <div className="my-14 px-14">
        <BasicCarousel />
      </div>
      <div className="flex flex-col gap-20 bg-[#F7FCFF]">
        <div >
        <BooksView bookData={topBooks} title={"New Releases in Books"} />
        </div>
       

        <PopularCategoryView
          categoriesData={mainAuthors}
          title={"Most Preferred Authors This Month"}
          background={
            "https://images.boboscope.com/a21f2c1c-dbad-4ea4-b56b-cf9014ff393a?alt=media&token=fb6ea59f-7297-4ac0-b8ba-2ed99db98ca2&tr=w-1100,c-at_max,f-auto"
          }
        />
        <PopularCategoryView
          categoriesData={topGenres}
          title={"Most Purchased/Donated Genres This Month"}
          background={
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
