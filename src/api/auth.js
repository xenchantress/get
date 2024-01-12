import instance from ".";
import { saveToken } from "./storage";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const logout = () => {
  localStorage.removeItem("token");
};

const login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);
  storeToken(res.token);

  const token = res.data.token;
  if (token) {
    saveToken(token);
  }
  //console.log(res);
  return res.data;
};

const register = async (userInfo) => {
  const formData = new FormData();

  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  const res = await instance.post("/auth/register", formData);
  console.log(res);
  const token = res.data.token;
  if (token) {
    saveToken(token); 
  }
  return res.data;
};

//export {register};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    //logout();
    localStorage.removeItem("token");
    return false;
  }
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers, checkToken, logout };
