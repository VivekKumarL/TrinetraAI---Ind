import { registerUser } from "@/services/auth/registerUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

// 👇 Define your form data type here
type RegisterPayload = {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  fcmToken: string;
};

export const useRegisterUser = () => {
  return useMutation({
    // 👇 Tell TypeScript this function accepts RegisterPayload
    mutationFn: (data: RegisterPayload) => registerUser(data),

    onSuccess: (response) => {
      console.log("Raw register response:", response);

      // Assuming your backend returns these fields
      const { jwt_access_token, jwt_refresh_token } = response.data;

      localStorage.setItem("trinetra_access_token", jwt_access_token);
      localStorage.setItem("trinetra_refresh_token", jwt_refresh_token);

      toast.success("Registration Successful!");
    },

    onError: (error: unknown) => {
      const err = error as AxiosError<{ error?: string; message?: string }>;
      const apiError =
        err.response?.data?.error || err.response?.data?.message;

      toast.error(apiError || "Something went wrong");
    },
  });
};
