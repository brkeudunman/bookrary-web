import React from "react";
import BasicCarousel from "../../common/components/carousel/basic-carousel";
import CardsView from "../../common/view/cardsView";

const dataGenres = [
  "Sci-Fi",
  "Adventure",
  "Mythology",
  "Action",
  "Romance",
  "Thriller",
  "Historical",
  "Historical",
  "Historical",
  "Historical",
  "Historical",
];
const dataAuthors = [
  "Jane Austen",
  "Jane Austen",
  "Jane Austen",
  "Jane Austen",
  "Jane Austen",
  "Jane Austen",
  "Jane Austen",
  "Jane Austen",
];

const Home = () => {
  return (
    <div className=" ">
      <div className="my-14 px-14">
        <BasicCarousel />
      </div>
      <div className="flex flex-col gap-20 bg-[#F7FCFF]">
        <CardsView
          data={[
            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },
            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },

            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },
            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },
            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },
            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },
            {
              title: "Kuyucakli Yusuf",
              author: "Sabahattin Ali",
              location: "Urla, İzmir - Urla Halk Kütüp.",
              seller: "Berke Udunman",
            },
          ]}
          title={"New Releases in Books"}
          
        />

        <CardsView
          data={dataAuthors}
          title={"Most Preferred Authors This Month"}
          background={
            "https://images.boboscope.com/a21f2c1c-dbad-4ea4-b56b-cf9014ff393a?alt=media&token=fb6ea59f-7297-4ac0-b8ba-2ed99db98ca2&tr=w-1100,c-at_max,f-auto"
          }
          isTop
        />
        <CardsView
          data={dataGenres}
          title={"Most Purchased/Donated Genres This Month"}
          background={
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
          }
          isTop
        />
      </div>

      <div></div>
    </div>
  );
};

export default Home;