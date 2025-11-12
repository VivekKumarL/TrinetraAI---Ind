"use client";

import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

interface CheckURLResponse {
  data: string;
}

export function useCheckURL() {
  return useMutation({
    mutationFn: async (url: string) => {
      const response = await axiosInstance.post<CheckURLResponse>("/check-url/step-1", { url });
      return response.data;
    },
  });
}
