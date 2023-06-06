import React from "react";

const Result = () => {
  return (
    <div className="bg-[#ECF9FF] flex flex-col justify-center items-center rounded-md leading-normal">
      <div className="bg-white rounded-md flex flex-col justify-center items-center my-14 mx-10 px-12">
        <h1 className="text-[#3BC3FF] font-bold">Thanks for the Purchase!</h1>
        <h2 className="text-[#3BC3FF] m-4 font-semibold">
          Don't miss to get your book(s) in time!
        </h2>
        <div className="bg-[#FFD666] text-white mb-10 px-14 py-4 rounded-md">
          03:00:00
        </div>
        <div className="bg-[#7AD6FF] mb-8 rounded-lg py-4 px-10 text-white">
          <h3 className="underline text-start text-lg">Details of Order</h3>
          <h4 className="text-start">Location</h4>
          <div className="bg-white text-black rounded-lg px-6 py-4">
            <p>
              Gülbahçe Mah. <strong>IZTECH Library</strong> , Urla/Izmir.
            </p>
          </div>
          <p className="text-black text-xs pt-4">
            If you need help for finding location of library, please contact the
            owner of the book(s)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
