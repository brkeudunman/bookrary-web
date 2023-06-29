import {get} from "../api";

export const getUser = (userId) => {
  return get(`/user/${userId}`);
};

export const getStats = (userId) => {
    return get(`/user/stats/${userId}`);
};