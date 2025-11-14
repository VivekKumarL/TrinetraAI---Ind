"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useRegisterUser } from "@/app/hooks/useRegister";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        toast.success("Registration successful!");
        router.push("/login");
      },
      onError: () => {
        // Error will be handled below
      },
    });
  };

  const errorMessage =
    (error as AxiosError<ErrorResponse>)?.response?.data?.message ||
    (error as AxiosError<ErrorResponse>)?.response?.data?.error ||
    "Something went wrong";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10vh)] bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="username">Full Name</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone">Mobile Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={isPending}
              />
            </div>
             <Button type="submit"
              disabled={isPending} className="w-full">
              {isPending ? "Registering..." : "Register"}
            </Button>

            {isSuccess && (
              <p className="text-green-600 text-center">Registration successful!</p>
            )}

            {isError && <p className="text-red-600 text-center">{errorMessage}</p>}
          </form>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
