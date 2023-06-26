import React from "react";

const ProfileCard = ({ data, text }) => {
  return (
    <div className="border rounded-b-md">
      <div className="bg-[#FFFBEB] text-center font-semibold">{text}</div>
      <div>
        {data.map((item) => (
          <div className="text-center bg-[#B9E9FF]">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
