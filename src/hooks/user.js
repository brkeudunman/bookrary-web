import { useQuery } from "react-query";
import { getStats, getUser } from "../api/user/user.api";
import { notification } from "antd";

export const useGetUser = (id, onSuccess) => {
  return useQuery(
    "get-user",
    () => {
      if (window.localStorage.getItem("token")) return getUser(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: error.message,
          message: "An Error Has Occured while Getting User Data",
        });
      },
    }
  );
};

export const useGetUserStats = (id, onSuccess) => {
  return useQuery(
    "get-user-stats",
    () => {
      return getStats(id);
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: error.message,
          message: "An Error Has Occured while Getting User Data",
        });
      },
    }
  );
};
