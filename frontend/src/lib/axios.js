import axios from "axios";

console.log("VITE_SERVER_URL =", import.meta.env.VITE_SERVER_URL);

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;