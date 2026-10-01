import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://repo-white-hat-backend-azure-andsa2aagqd4h8em.westus3-01.azurewebsites.net/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
