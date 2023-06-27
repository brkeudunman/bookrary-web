import React from "react";

const ProfileCard = ({ data, text }) => {
  return (
    <div className="border rounded-b-md overflow-hidden">
      <div className="bg-[#FFFBEB] text-center text-sm font-semibold py-2.5 px-2 text-[#343434]">{text}</div>
      <div>
        {[...Array(10)].map((_, index) =>
          index < (data?.length || 0) ? (
            <div key={index} className="text-center bg-[#B9E9FF] border py-1.5 text-sm text-[#343434]">
              {data[index]}
            </div>
          ) : (
            <div key={index} className="text-center text-transparent bg-[#B9E9FF] border py-1.5 text-sm text-[#343434]">
                {"_"}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
