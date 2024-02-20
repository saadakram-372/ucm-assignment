/**
 * This is file will contain all of the generic functions for performing the CRUD functions i.e, POST, GET, PATCH, DELETE etc.
 * If you need to perform any of the above action you can call any of the following function and pass in following parameters:
 * @param {string} endpoint
 * @returns {object} response
 */

import { Config } from "../app-config/config";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Config.BEARER_KEY}`,
  },
};

export const getList = async (endpoint: string) => {
  const data = await fetch(`${Config.API_BASE_URL}${endpoint}`, options);
  return data;
};
