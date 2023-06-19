import React from "react";
import BasicBreadCrumb from "../../../common/components/breadcrumb/breadcrumb";
import { dataBooks } from "../../../temp/data";
import BasicCard from "../../../common/components/card/basic-card";

const GenresPage = () => {
  return (
    <div className="px-12 py-4 lg:px-32 lg:py-8 flex flex-col gap-4 bg-[#F7FCFF]">
      <div className="text-sm order-2 lg:order-1">
        <span className="font-bold ">Hi,</span>
        <br />
        <br /> Introduce the project-library-book relationship hereIntroduce the
        project-library-book relationship hereIntroduce the project-library-book
        relationship hereIntroduce the project-library-book relationship
        hereIntroduce the project-library-book relationship hereIntroduce the
        project-library-book relationship hereIntroduce the project-library-book
        relationship hereIntroduce the project-library-book relationship here
      </div>
      <div className=" order-1 lg:order-2">
        <BasicBreadCrumb />
      </div>

      <div className="grid grid-cols-1 mini:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 order-3">
        {dataBooks.map((val, idx) => (
          <BasicCard children={val} />
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
