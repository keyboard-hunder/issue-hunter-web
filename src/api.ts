import axios from "axios";

// the base URL for your REST API backend
const baseURL = "https://api.github.com/";
export const baseApi = axios.create({ baseURL });
