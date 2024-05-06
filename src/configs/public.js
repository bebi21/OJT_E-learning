import axios from "axios";

const baseURL = "http://localhost:3000";

const publicAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicAxios;
export const getALlCourseApi = async () => {
  try {
    const response = await publicAxios.get(API_GET_ALL_COURSE);
    return response;
  } catch (error) {
    return error;
  }
};
