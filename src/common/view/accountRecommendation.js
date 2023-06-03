import React from "react";

import { dataAuthors } from "../../data/mock_authors";
import { Avatar, Image } from "antd";

const AccountRecomendationView = () => {
  return (
    <div className="flex-1 flex-wrap box-content  p-12 rounded-3xl text-center border border-[#F8CBA6] bg-[#FFF4C6]">
      <div>
        <h3 className="text-5xl text-white underline mb-8">Have an account?</h3>
        <p className="flex  text-white">
          Lorem ipsum dolor sit amet Consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>
      <section className="overflow-scroll md:overflow-auto flex md:grid lg:grid-cols-3 grid-cols-2 gap-4 mt-8">
        {dataAuthors?.map((data) => (
          <div className=" hover:shadow-lg flex justify-center rounded-lg bg-[#FFFBEB] p-2">
            <span className=" flex justify-center  rounded-full xl:w-32 xl:h-32  object-cover">
              <Avatar
                src={data.image}
                size={{ xs: 120, sm: 120, md: 90, lg: 100, xl: 120, xxl: 120 }}
              />
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AccountRecomendationView;
