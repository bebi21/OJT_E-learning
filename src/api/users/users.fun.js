import publicAxios from "../../configs/public";
import { failed } from "../../utils/notify";
import { API_LOGIN, API_REGISTER } from "./Api.user";

export const handleRegiterApi = async (dataRegister) => {
  try {
    const response = await publicAxios.post(API_REGISTER,dataRegister);
    return response;
  } catch (error) {
    failed(error.response.data.message);

  }
};

export const handleLoginApi = async (loginData) => {
  try {
    const response = await publicAxios.post(API_LOGIN,loginData);
    return response;
  } catch (error) {
      failed(error.response.data.message);
       return
  }
};


