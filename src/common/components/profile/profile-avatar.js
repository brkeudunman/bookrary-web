import React from "react";
import aragorn from "../../../assets/aragorn.jpg";
import { Avatar } from "antd";

const ProfileAvatar = () => {
  return (
    <div className="object-fill h-full w-full rounded-full flex flex-col justify-center items-center  ">
      <Avatar size={240} alt="profileAvatar " className=" rounded-full " src={aragorn} />
    </div>
  );
};

export default ProfileAvatar;
