import React from "react";

const ProfileInfoLine = ({ text }) => {
  return (
    <div
      className={` font-montserrat text-sm md:text-base font-medium text-[#343434] bg-[#FFFBEB] w-full text-center py-3 border rounded-md`}
    >
      {text}
    </div>
  );
};

export default ProfileInfoLine;
