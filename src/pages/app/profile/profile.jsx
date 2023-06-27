import React from "react";
import ProfileAvatar from "../../../common/components/profile/profile-avatar";
import ProfileInfoLine from "./../../../common/components/profile/profile-info-line";
import ProfileBadge from "../../../common/components/profile/profile-badge";
import ProfileCard from "../../../common/components/profile/profile-card";

const Profile = () => {
  return (
    <div className="md:m-16 m-8 md:px-9 md:py-14 px-4 py-8 bg-white gap-y-12 flex flex-col">
      <div className="flex-col md:flex-row md:flex gap-20">
        <div className="md:basis-1/4 mb-8 md:mb-0 ">
          <ProfileAvatar />
        </div>
        <div className="flex flex-col md:basis-3/4 gap-y-2.5">
          <div className="font-bold text-2xl">Hi, Aragorn!</div>
          <span className="flex flex-col gap-y-6">
            <ProfileInfoLine text={"Aragorn II Elessar"} />
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <ProfileBadge totalText={"Total Sale"} count={22} />
              <ProfileBadge totalText={"Total Purchased"} count={14} />
              <ProfileBadge totalText={"Total Donated"} count={18} />
            </span>
            <ProfileInfoLine
              text={"Izmir Institute of Technology Library, Urla/Izmir. Turkey"}
            />
          </span>
        </div>
      </div>
      <div className="flex gap-x-20 gap-y-8 flex-col md:flex-row">
        <div className="basis-1/4">
          <ProfileCard data={["Action","Mythology","Action","Mythology","Action","Mythology","Action","Mythology"]} text={"Most Purchased/Donated Genres"}/>
        </div>
        <div className="basis-1/2">
          <ProfileCard text={"Purchase/Donation History"}/>
        </div>
        <div className="basis-1/4">
          <ProfileCard text={"Best Selling Book Genres"}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
