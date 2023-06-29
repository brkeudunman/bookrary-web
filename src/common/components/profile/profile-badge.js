import React from "react";

const ProfileBadge = ({ totalText, count }) => {
  return (
    <div className="flex flex-col rounded-md border">
      <span className="bg-white basis-3/5 text-center object-fill py-2 text-[#343434] font-medium">{totalText}</span>
      <span className="bg-[#FFF6D3] basis-2/5 text-center py-1">{count}</span>
    </div>
  );
};

export default ProfileBadge;
