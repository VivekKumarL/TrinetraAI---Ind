"use client";

import { useQuery } from "@tanstack/react-query";

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ["auth-status"],
    queryFn: () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("trinetra_access_token");
        return { isLoggedIn: !!token, token };
      }
      return { isLoggedIn: false, token: null };
    },
    staleTime: Infinity,
  });
};
