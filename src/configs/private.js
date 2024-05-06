import axios from "axios";

const baseURL = "http://localhost:3000";

const tokenAxios = axios.create({
  baseURL,
});

tokenAxios.interceptors.request.use((config) => {
  const jwtTokent = localStorage.getItem("token");
  console.log(jwtTokent);
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtTokent}`,
    },
  };
});

export default tokenAxios;
