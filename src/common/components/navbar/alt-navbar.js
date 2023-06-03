import { Button, Popover } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./popover.css";

const OptionButton = ({ city, genre, text, to, className }) => {
  return (
    <div>
      <Link to={`./${(genre && "genres") ?? (city && "cities")}/${to}`}>
        <span className={className}>{text} </span>
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
          genre
          className={"text-blue-400"}
          to={""}
          text={"All Genres..."}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-20">
        <OptionButton genre text={"Action"} to={"actionId"} />
        <OptionButton genre text={"Adventure"} to={"adventureId"} />
        <OptionButton genre text={"Classics"} to={"classicsId"} />
        <OptionButton genre text={"Contemporary"} to={"contemporaryId"} />
        <OptionButton genre text={"Fantasy"} to={"fantasyId"} />
        <OptionButton genre text={"Historical"} to={"historicalId"} />
        <OptionButton genre text={"Horror"} to={"horrorId"} />
        <OptionButton genre text={"Mythology"} to={"mythologyId"} />
        <OptionButton genre text={"Non-fiction"} to={"nonfictionId"} />
        <OptionButton genre text={"Plays"} to={"playsId"} />
        <OptionButton genre text={"Poetry"} to={"poetryId"} />
        <OptionButton genre text={"Psychology"} to={"psychologyId"} />
        <OptionButton genre text={"Romance"} to={"romanceId"} />
        <OptionButton genre text={"Sci-Fi"} to={"scifiId"} />
        <OptionButton genre text={"Thriller"} to={"thrillerId"} />
      </div>
    </div>
  );
};

const CityButton = ({ text, to }) => {
  return (
    <div className="flex flex-col col-span-1 items-center gap-2">
      <OptionButton
        className={
          "p-3 w-full text-lg font-bold text-[#565555] text-center hover:bg-yellow-100 hover:shadow-xl bg-yellow-200 rounded-md"
        }
        text={to}
        to={to}
        city
      />
      <p className="text-center">{text}</p>
    </div>
  );
};

const CityContent = () => {
  return (
    <div className="px-2 font-montserrat">
      <div className="mx-20 mb-6 text-lg text-center underline font-bold text-[#565555]">
        Pick the city to search books!
      </div>

      <div className="grid grid-cols-10 gap-y-5 gap-x-4">
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Ankara"} to={"06"} />
        <CityButton text={"Antalya"} to={"09"} />
        <CityButton text={"Istanbul"} to={"34"} />
        <CityButton text={"Izmir"} to={"35"} />
        <CityButton text={"Manisa"} to={"45"} />
        <CityButton text={"Aydın"} to={"01"} />
        <CityButton text={"Muğla"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
        <CityButton text={"Adana"} to={"01"} />
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
        <Link to={"/cities"}>
          <Button className="bg-gray-100 px-20 font-montserrat font-medium">
            Cities
          </Button>
        </Link>
      </Popover>
    </div>
  );
};

export default AltNavbar;
