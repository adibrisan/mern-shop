import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQ5NDZmYTUyYzFhZWQ1NGM2NTgwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTc3NjE4NCwiZXhwIjoxNjYyMDM1Mzg0fQ.X7tmYtCJx-9Hb9lqCk6D5z9FHyY6gSjXjhGJj5GjGMU";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
});

export default axiosInstance;
