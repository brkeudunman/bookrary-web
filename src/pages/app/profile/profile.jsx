import React from "react";
import ProfileAvatar from "../../../common/components/profile/profile-avatar";
import ProfileInfoLine from "./../../../common/components/profile/profile-info-line";
import ProfileBadge from "../../../common/components/profile/profile-badge";

const Profile = () => {
  return (
    <div className="md:m-16 m-8 md:px-9 md:py-14 px-4 py-8 bg-white">
      <div className="flex-col md:flex-row md:flex gap-20">
        <div className="md:basis-1/4 mb-8 md:mb-0 ">
          <ProfileAvatar />
        </div>
        <div className="flex flex-col md:basis-3/4 gap-y-2.5">
          <div className="font-bold text-2xl">Hi, Aragorn!</div>
          <span className="flex flex-col gap-y-6">
            <ProfileInfoLine text={"Aragorn II Elessar"} color={"#FFFBEB"} />
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <ProfileBadge totalText={"Total Sale"} count={22} />
              <ProfileBadge totalText={"Total Sale"} count={22} />
              <ProfileBadge totalText={"Total Sale"} count={22} />
            </span>
            <ProfileInfoLine
              text={"Izmir Institute of Technology Library, Urla/Izmir. Turkey"}
              color={"#FFFBEB"}
            />
          </span>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Profile;
