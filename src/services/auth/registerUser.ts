import axiosInstance from "@/lib/axiosInstance";
import { RegisterUserPayload } from "@/types/user";

export const registerUser = async (data: RegisterUserPayload) => {
  const response = await axiosInstance.post("/user/register-new-user", data);
  return response.data;
};
