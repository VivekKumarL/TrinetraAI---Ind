import axiosInstance from "@/lib/axiosInstance";

export const registerUser = async (data: any) => {
  const response = await axiosInstance.post("/user/register-new-user", data);
  return response.data;
};
