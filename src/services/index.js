import env from "react-dotenv";
import axios from "axios";

const API_URL = `${env.API_ADDRESS}:${env.API_PORT}/api/`;

const api = axios.create({
  baseURL: API_URL,
});

export default api;
