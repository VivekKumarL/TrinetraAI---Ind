import axiosInstance from "@/lib/axiosInstance";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("trinetra_refresh_token");
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axiosInstance.post(
    "/user/create-new-access-token-from-refresh-token",
    {
      jwt_refresh_token: refreshToken,
    }
  );

  const { jwt_access_token } = response.data.data;
  localStorage.setItem("trinetra_access_token", jwt_access_token);
  return jwt_access_token;
};
