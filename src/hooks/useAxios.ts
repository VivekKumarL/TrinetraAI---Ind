import axios from "axios";
import { useMemo } from "react";
import { toast } from "sonner";

const useAxios = () => {
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: { "Content-Type": "application/json" },
    });

    // Attach token to every request
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("trinetra_access_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Handle unauthorized errors
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const err = error.response?.data || {};
        if (
          error.response?.status === 401 ||
          err.error === "Invalid token" ||
          err.msg === "Please login again"
        ) {
          toast.error("Session expired. Please log in again.");
          localStorage.removeItem("trinetra_access_token");
          window.location.href = "/login";
        } else {
          toast.error(err.msg || "Something went wrong.");
        }
        console.error("API Error:", err);
        return Promise.reject(error);
      }
    );

    return instance;
  }, []);

  return axiosInstance;
};

export default useAxios;
