import { registerUser } from "@/services/auth/registerUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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
    onError: (error: any) => {
      const apiError =
        error.response?.data?.error || error.response?.data?.message;
      if (apiError) {
        toast.error(apiError);
      } else {
        toast.error("Something went wrong");
      }
    },
  });
};
