import publicAxios from "../../configs/public";
import {
  API_GET_ALL_COURSE,
  API_SEARCH_COURSE,
  API_PAGINATION_COURSE,
} from "./ApiCourse";
export const getALlCourseApi = async () => {
  try {
    const response = await publicAxios.get(API_GET_ALL_COURSE);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const handleSearchCourseApi = async (dataValue) => {
  try {
    const response = await publicAxios.get(API_SEARCH_COURSE + `${dataValue}`);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const handlePaginationRenderOneApi = async (firstPage, limit) => {
  try {
    const response = await publicAxios.get(
      API_PAGINATION_COURSE + `${firstPage}&limit=${limit}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const handlePaginationApi = async (page, limit) => {
  try {
    const response = await publicAxios.get(
      API_PAGINATION_COURSE + `${page}&limit=${limit}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const handleFindCourseByIdApi = async (id) => {
  try {
    const response = await publicAxios.get(API_COURSES_BY_ID + `${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
