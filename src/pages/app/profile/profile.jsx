import React from "react";
import ProfileAvatar from "../../../common/components/profile/profile-avatar";
import ProfileInfoLine from "./../../../common/components/profile/profile-info-line";
import ProfileBadge from "../../../common/components/profile/profile-badge";
import ProfileCard from "../../../common/components/profile/profile-card";
import { useGetUser, useGetUserStats } from "../../../hooks/user";
import { Spin } from "antd";

const Profile = () => {
  const userId = window.localStorage.getItem("id");

  const {
    isLoading: isUserLoading,
    data: userData,
    isError: isUserError,
  } = useGetUser(userId);
  const {
    isLoading: isStatLoading,
    data: userStats,
    isError: isStatsError,
  } = useGetUserStats(userId);

  return (
    <Spin spinning={isStatLoading || isUserLoading}>
      <div className="md:m-16 m-8 md:px-9 md:py-14 px-4 py-8 bg-white gap-y-12 flex flex-col">
        <div className="flex-col md:flex-row md:flex gap-20">
          <div className="md:basis-1/4 mb-8 md:mb-0 ">
            <ProfileAvatar />
          </div>
          <div className="flex flex-col md:basis-3/4 gap-y-2.5">
            <div className="font-bold text-2xl">Hi, {userData?.firstName}!</div>
            <span className="flex flex-col gap-y-6">
              <ProfileInfoLine
                text={userData?.firstName + " " + userData?.lastName}
              />
              <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                <ProfileBadge
                  totalText={"Total Sale"}
                  count={userStats?.totalSale}
                />
                <ProfileBadge
                  totalText={"Total Purchased"}
                  count={userStats?.totalPurchased}
                />
                <ProfileBadge
                  totalText={"Total Donated"}
                  count={userStats?.totalDonated}
                />
              </span>
              <ProfileInfoLine text={userData?.library.name} />
            </span>
          </div>
        </div>
        <div className="flex gap-x-20 gap-y-8 flex-col md:flex-row">
          <div className="basis-1/4">
            <ProfileCard  data={userStats?.mostBoughtBookTypes} text={"Most Purchased/Donated Genres"} />
          </div>
          <div className="basis-1/2">
            <ProfileCard data={userStats?.purchaseDonationHistory.map((history)=>history.advert.title)} text={"Purchase/Donation History"} />
          </div>
          <div className="basis-1/4">
            <ProfileCard
              data={userStats?.mostSoldBookTypes}
              text={"Best Selling Book Genres"}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Profile;
