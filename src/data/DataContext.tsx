import axios from "axios";

axios.defaults.baseURL = "https://localhost:5001/";
const getData = () => {
  const data = axios.get("car/getCars").then((response) => response.data);
  return data;
};

export default getData;
