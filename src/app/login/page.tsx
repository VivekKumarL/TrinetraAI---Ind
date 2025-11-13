"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://apiv2.TrinetraAI.com/user/login-with-username-password", {
        username,
        password,
      });

      console.log("Login response:", res.data);

      const accessToken = res.data.data.jwt_access_token;
      const refreshToken = res.data.data.jwt_refresh_token;

      if (accessToken && refreshToken) {
        localStorage.setItem("trinetra_access_token", accessToken);
        localStorage.setItem("trinetra_refresh_token", refreshToken);
        window.dispatchEvent(new Event("trinetra-login"));
        console.log("Access token saved:", accessToken);
        toast.success(res.data.msg);
        router.push("/TrinetraAI-p1");
      } else {
        toast.error("Token missing in response");
      }
    } catch (error: unknown) {
      const err = error as AxiosError<{ msg?: string }>;
      toast.error(err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="text-sm text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-purple-600 font-medium hover:underline"
            >
              Register as new user
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
