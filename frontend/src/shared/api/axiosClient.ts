import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://repo-white-hat-backend-azure-andsa2aagqd4h8em.westus3-01.azurewebsites.net/api/v1";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
