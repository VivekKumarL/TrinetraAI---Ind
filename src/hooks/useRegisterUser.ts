"use client";

import { useMutation } from "@tanstack/react-query";
import { registerNewUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export const useRegisterUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: registerNewUser,
    onSuccess: (response) => {
      const { jwt_access_token, jwt_refresh_token } = response.data;

      // Save tokens in localStorage
      localStorage.setItem("access_token", jwt_access_token);
      localStorage.setItem("refresh_token", jwt_refresh_token);

      // Redirect to dashboard or homepage
      router.push("/dashboard");
    },
    onError: (error: any) => {
      console.error("Registration error:", error);
    },
  });
};

// 12 aug 2025