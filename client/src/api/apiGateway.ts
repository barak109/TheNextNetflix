import axios from "axios";

const SERVER_PATH = "http://localhost:3001/";

export const getShowes = async (query: string) => {
  try {
    const response = await axios.get(SERVER_PATH + "getShowes", {
      params: {
        query
      }
    });
    return response.data;
  } catch (error) {
    console.log("Failed to getShowes");
    throw error;
  }
};

export const getTopShowesName = async (query: string) => {
  try {
    const response = await axios.get(SERVER_PATH + "getTopShowesName", {
      params: {
        query
      }
    });
    return response.data;
  } catch (error) {
    console.log("Failed to getTopShowesName");
    throw error;
  }
};
