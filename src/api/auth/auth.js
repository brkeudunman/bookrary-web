import {post} from "../api";

export const login = (data) => {
  return post("/auth/login", data);
};

export const register = (data) => {
  return post("/auth/register", data);
};