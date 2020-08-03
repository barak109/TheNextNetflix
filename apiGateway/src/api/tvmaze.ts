import axios from "axios";

const TV_MAZE_PATH = "http://api.tvmaze.com/";

export const getShowes = async (query: string) => {
  try {
    const response = await axios.get(TV_MAZE_PATH + "search/shows", {
      params: {
        q: query
      }
    });
    return response.data;
  } catch (error) {
    console.log("Failed to getShowes !!");
    throw error;
  }
};
