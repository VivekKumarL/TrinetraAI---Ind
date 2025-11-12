import { AxiosInstance } from "@/lib/apiClient";

interface RegisterUserPayload {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterUserResponse {
  data: {
    jwt_access_token: string;
    jwt_refresh_token: string;
  };
}

export const registerNewUser = async (
  payload: RegisterUserPayload
): Promise<RegisterUserResponse> => {
  const { data } = await AxiosInstance.post<RegisterUserResponse>(
    "/user/register-new-user",
    payload
  );
  return data;
};

// 12 aug 2025