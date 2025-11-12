"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import FullScreenLoader from "@/components/FullScreenLoader";
import { Toaster } from "sonner";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          {loading && <FullScreenLoader>Loading...</FullScreenLoader>}
          <main className="w-full">
            <Navbar />
            <div className="px-4">
              {children}
              <Toaster richColors position="top-center" />
            </div>
            <Footer />
          </main>
        </SidebarProvider>
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  );
}
