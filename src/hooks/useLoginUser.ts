import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/auth/loginUser";
import { AxiosError } from "axios";

// Define proper types
interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    jwt_access_token: string;
  };
}

interface ApiErrorResponse {
  error?: string;
  message?: string;
}

export const useLoginUser = () => {
  const router = useRouter();

  return useMutation<LoginResponse, AxiosError<ApiErrorResponse>, LoginCredentials>({
    mutationFn: (credentials) => loginUser(credentials),
    onSuccess: (data) => {
      const { jwt_access_token } = data.data;

      console.log("Access Token received:", jwt_access_token);
      localStorage.setItem("trinetra_access_token", jwt_access_token);

      window.dispatchEvent(new Event("trinetra-login"));
      toast.success("Login Successful!");
      router.push("/");
    },
    onError: (error) => {
      const apiError = error.response?.data?.error || error.response?.data?.message;
      toast.error(apiError || "Login failed");
    },
  });
};
