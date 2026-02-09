import { api } from "./api";

api.interceptors.request.use(
  (config) => {
    // contoh ambil token dari localStorage
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // contoh handle 401 global
    if (error.response?.status === 401) {
      // logout / redirect logic
    }
    return Promise.reject(error);
  }
);
