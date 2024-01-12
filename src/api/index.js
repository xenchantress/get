import  axios from "axios";

const instance = axios.create({
    baseUrl:  "https://react-bank-project.eapi.joincoded.com",
});

export default instance;