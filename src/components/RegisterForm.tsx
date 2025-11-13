"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegisterUser } from "@/app/hooks/useRegister";
import { AxiosError } from "axios"; // ✅ Import for proper typing

interface RegisterFormData {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  fcmToken: string;
}

interface ErrorResponse {
  message?: string;
  error?: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    fcmToken: "for notification",
  });

  const { mutate, isPending, isSuccess, isError, error } = useRegisterUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };

  const errorMessage =
    (error as AxiosError<ErrorResponse>)?.response?.data?.message ||
    (error as AxiosError<ErrorResponse>)?.response?.data?.error ||
    "Something went wrong";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-sm mx-auto p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800 dark:text-gray-100">
        Create Account
      </h2>

      <Input
        name="username"
        placeholder="Full Name"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <Input
        name="phone"
        type="tel"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 font-medium"
      >
        {isPending ? "Registering..." : "Register"}
      </Button>

      {isSuccess && (
        <p className="text-green-600 text-center">Registration successful!</p>
      )}

      {isError && <p className="text-red-600 text-center">{errorMessage}</p>}
    </form>
  );
}
