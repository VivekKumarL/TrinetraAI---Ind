import { registerUser } from "@/services/auth/registerUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Raw login response data:", data);
      const { jwt_access_token, jwt_refresh_token } = data.data;
      console.log("Access token saved:", jwt_access_token);

      localStorage.setItem("trinetra_access_token", jwt_access_token);
      localStorage.setItem("trinetra_refresh_token", jwt_refresh_token);

      toast.success("Registration Successful!");
    },
    onError: (error: unknown) => {
      const err = error as AxiosError<{ error?: string; message?: string }>;
      const apiError =
        err.response?.data?.error || err.response?.data?.message;

      if (apiError) {
        toast.error(apiError);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
};
