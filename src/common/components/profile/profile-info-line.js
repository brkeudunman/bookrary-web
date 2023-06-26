import React from "react";

const ProfileInfoLine = ({ color, text }) => {
  return (
    <div
      className={`font-montserrat text-sm md:text-base font-medium text-[#343434] bg-[${color}] w-full text-center py-3 border rounded-md`}
    >
      {text}
    </div>
  );
};

export default ProfileInfoLine;
