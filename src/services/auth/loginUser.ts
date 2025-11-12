import axiosInstance from "@/lib/axiosInstance";

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};
