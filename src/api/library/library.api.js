import {get} from "../api";

export const getLibraries = () => {
  return get(`/library`);
};