import publicAxios from "../../configs/public";
import { API_REGISTER } from "./Api.user";

export const handleRegiterApi = async (dataRegister) => {
    console.log('first')
  try {
    const response = await publicAxios.post(API_REGISTER,dataRegister);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
