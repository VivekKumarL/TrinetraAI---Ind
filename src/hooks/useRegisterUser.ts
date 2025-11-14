"use client";

import { useMutation } from "@tanstack/react-query";
import { registerNewUser } from "@/services/auth/service";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { RegisterUserPayload } from "@/types/user";

// ✅ The API returns these fields
interface RegisterResponse {
  data: {
    jwt_access_token: string;
    jwt_refresh_token: string;
  };
}

// ✅ The API error format
interface ApiErrorResponse {
  error?: string;
  message?: string;
}

export const useRegisterUser = () => {
  const router = useRouter();

  return useMutation<RegisterResponse, AxiosError<ApiErrorResponse>, RegisterUserPayload>({
    mutationFn: (credentials) => registerNewUser(credentials),
    onSuccess: (response) => {
      const { jwt_access_token, jwt_refresh_token } = response.data;

      // Save tokens securely in localStorage
      localStorage.setItem("access_token", jwt_access_token);
      localStorage.setItem("refresh_token", jwt_refresh_token);

      // Redirect after successful registration
      router.push("/dashboard");
    },
    onError: (error) => {
      const apiError = error.response?.data?.error || error.response?.data?.message;
      console.error("Registration error:", apiError || error.message);
    },
  });
};
