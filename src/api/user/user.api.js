import { get, put } from "../api";

export const getUser = (userId) => {
  return get(`/user/${userId}`);
};

export const getStats = (userId) => {
  return get(`/user/stats/${userId}`);
};

export const updateUser = (userId, data) => {
  return put(`/user/${userId}`, data);
};
