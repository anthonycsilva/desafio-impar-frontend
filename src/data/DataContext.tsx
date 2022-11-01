import axios from "axios";

const getData = () => {
  const data = axios
    .get("https://localhost:5001/car/getCars")
    .then((response) => response.data);
  return data;
};

export default getData;
