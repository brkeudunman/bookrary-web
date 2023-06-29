import React from "react";

const ProfileCard = ({ data, text }) => {
  const formatData = (data) => {
    if (!data) return "";
    const words = data.split("_");
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  };
  
  return (
    <div className="border rounded-b-md overflow-hidden">
      <div className="bg-[#FFFBEB] text-center text-sm font-semibold py-2.5 px-2 text-[#343434]">{text}</div>
      <div>
        {[...Array(10)].map((_, index) =>
          index < (data?.length || 0) ? (
            <div key={index} className="text-center bg-[#B9E9FF] border py-1.5 text-sm text-[#343434] ">
               {formatData(data && data[index])}
            </div>
          ) : (
            <div key={index} className="text-center text-transparent bg-[#B9E9FF] border py-1.5 text-sm text-[#343434]">
                {"-"}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
