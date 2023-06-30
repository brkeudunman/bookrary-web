import { useQuery } from "react-query";
import { getLibraries } from "../api/library/library.api";
import { notification } from "antd";

export const useGetLibraries = (onSuccess) => {
  return useQuery(
    "get-libraries",
    () => {
      return getLibraries();
    },
    {
      onSuccess,
      onError: (error) => {
        notification.error({
          description: error.message,
          message: "An Error Has Occured while Getting Libraries Data",
        });
      },
    }
  );
};
