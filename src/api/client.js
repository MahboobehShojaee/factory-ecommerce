import axios from "axios";
import { apiBaseUrl } from "../config/site.js";

const baseURL = apiBaseUrl;

export const apiClient = axios.create({
  baseURL,
  timeout: 25000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error.message ||
      "Request failed";
    const normalizedError = new Error(message, { cause: error });
    normalizedError.response = error?.response;
    normalizedError.code = error?.code;
    return Promise.reject(normalizedError);
  },
);
