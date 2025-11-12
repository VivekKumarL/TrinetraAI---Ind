"use client";

import { LogOut, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Platform", href: "/platform" },
  { label: "TrinetraAI Scan", href: "/trinetra-scan" },
  { label: "Why TrinetraAI", href: "/whyus" },
  { label: "About Us", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Contact", href: "/contact" },
];

interface DecodedToken {
  username: string;
  imageUrl?: string;
}

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setMounted(true);

    const loadUserFromToken = () => {
      const token = localStorage.getItem("trinetra_access_token");
      if (token) {
        try {
          const decoded: DecodedToken = jwtDecode(token);
          setUsername(decoded.username);
          setImageUrl(decoded.imageUrl || "");
        } catch (err) {
          localStorage.removeItem("trinetra_access_token");
          localStorage.removeItem("trinetra_refresh_token");
          setUsername("");
          setImageUrl("");
        }
      } else {
        setUsername("");
        setImageUrl("");
      }
    };

    loadUserFromToken();

    window.addEventListener("trinetra-login", loadUserFromToken);
    window.addEventListener("storage", loadUserFromToken);

    return () => {
      window.removeEventListener("trinetra-login", loadUserFromToken);
      window.removeEventListener("storage", loadUserFromToken);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("trinetra_access_token");
    localStorage.removeItem("trinetra_refresh_token");
    setUsername("");
    setImageUrl("");
    toast.success("Logged out successfully");
  };

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    document.body.style.overflow = openNavigation ? "auto" : "hidden";
  };

  const logoSrc =
    theme === "light"
      ? "/trinetralogo1.png"
      : "/trinetralogo1.png";

  return (
    <nav className="p-4 h-20 px-4 sticky top-0 bg-background z-[50] border-b border-gray-800">
      {/* MOBILE NAV */}
      <div className="md:hidden flex items-center justify-between h-full">
        <Link href="/">
          {mounted ? (
            <Image src={logoSrc} alt="Trinetra-logo" width={180} height={32} priority />
          ) : (
            <div style={{ width: 180, height: 32 }} />
          )}
        </Link>

        <div className="flex items-center gap-2">
          {/* Login Button */}
          {!username && (
            <Link href="/login">
              <Button size="sm" variant="default">
                Login
              </Button>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            className="z-50"
            variant="outline"
            size="icon"
            onClick={toggleNavigation}
          >
            <span className="text-xl">☰</span>
          </Button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {openNavigation && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={toggleNavigation}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="fixed top-0 right-0 h-screen w-[260px] bg-background shadow-lg z-50 p-6 space-y-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                {/* Menu Links */}
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={toggleNavigation}
                      className="block text-lg font-medium hover:text-purple-600"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {username && (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={toggleNavigation}
                        className="block text-lg font-medium hover:text-purple-600"
                      >
                        Dashboard
                      </Link>
                      <Button
                        onClick={() => {
                          handleLogout();
                          toggleNavigation();
                        }}
                        variant="destructive"
                        className="w-full"
                      >
                        Logout
                      </Button>
                    </>
                  )}

                  {/* Theme Toggle */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="w-full">
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center justify-between h-full">
        <Link href="/">
          {mounted ? (
            <Image src={logoSrc} alt="logo" width={220} height={40} priority />
          ) : (
            <div style={{ width: 220, height: 40 }} />
          )}
        </Link>

        <div className="flex items-center gap-3 text-sm">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <Button variant="ghost" className="font-medium">
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 font-semibold">
          {username ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  {imageUrl ? (
                    <AvatarImage src={imageUrl} />
                  ) : (
                    <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
                  )}
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>{username}</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="default">Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="secondary">Sign up</Button>
              </Link>
            </>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
