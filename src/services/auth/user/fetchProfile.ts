import axiosInstance from "@/lib/axiosInstance";

export const fetchUserProfile = async () => {
  const response = await axiosInstance.get("/user/profile");
  return response.data;
};
