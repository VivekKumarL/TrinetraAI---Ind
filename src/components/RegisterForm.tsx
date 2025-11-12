"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegisterUser } from "@/app/hooks/useRegister";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
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
      <Button type="submit" disabled={isPending}>
        {isPending ? "Registering..." : "Register"}
      </Button>

      {isSuccess && <p className="text-green-600">Registration successful!</p>}
      {isError && (
        <p className="text-red-600">
          {(error as any)?.response?.data?.message || "Something went wrong"}
        </p>
      )}
    </form>
  );
}
