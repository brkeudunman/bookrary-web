import { Button, Popover } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./popover.css";
import { allGenres, trCities } from "../../../temp/data";

const OptionButton = ({ text, to, className }) => {
  console.log(text);
  return (
    <div>
      <Link to={to}>
        <span className={className}>{text}</span>
      </Link>
    </div>
  );
};

const GenreContent = () => {
  return (
    <div className="px-8 font-montserrat">
      <div className="mx-20 mb-4 text-lg font-bold text-[#565555]">
        All Genres You Might Like!
      </div>

      <div className="mb-1.5">
        <OptionButton
          className={"text-blue-400"}
          to={"/genres"}
          text={"All Genres..."}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-20">
        {allGenres.map((genre, index) => (
          <OptionButton key={index} text={genre.name} to={genre.id} />
        ))}
      </div>
    </div>
  );
};

const CityButton = ({ text, to }) => {
  const navigate = useNavigate();
  return (
    <span onClick={() => navigate(to)} className="grid">
      <button
        className={
          "w-full p-1 text-lg font-bold text-[#565555] text-center hover:bg-yellow-100 hover:shadow-xl bg-yellow-200 rounded-md"
        }
        to={to}
      >
        {to}
      </button>
      <p className="text-center">{text}</p>
    </span>
  );
};

const CityContent = () => {
  return (
    <div className="px-2 font-montserrat">
      <div className="mx-20 mb-6 text-lg text-center underline font-bold text-[#565555]">
        Pick the city to search books!
      </div>

      <div className="grid grid-cols-8 gap-2">
        {trCities.map((city) => (
          <CityButton text={city.name} to={city.id} />
        ))}
      </div>
    </div>
  );
};

const AltNavbar = () => {
  return (
    <div className="flex gap-3 bg-white border-b shadow-sm px-14 py-2">
      <Popover placement="bottom" content={<GenreContent />}>
        <Link to={"/genres"}>
          <Button className="bg-gray-100 px-20 font-montserrat font-medium">
            Genres
          </Button>
        </Link>
      </Popover>

      <Popover placement="bottom" content={<CityContent />}>
        <Button className="bg-gray-100 px-20 font-montserrat font-medium">
          Cities
        </Button>
      </Popover>
    </div>
  );
};

export default AltNavbar;
