import { loginUser } from "@/services/auth/loginUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useLoginUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { jwt_access_token } = data.data; // only access token
      console.log("Access Token received:", jwt_access_token);

      // Store only access token
      localStorage.setItem("trinetra_access_token", jwt_access_token);

      // Notify any listeners (Navbar, etc.)
      window.dispatchEvent(new Event("trinetra-login"));

      toast.success("Login Successful!");
      router.push("/");
    },
    onError: (error: any) => {
      const apiError =
        error.response?.data?.error || error.response?.data?.message;
      toast.error(apiError || "Login failed");
    },
  });
};
