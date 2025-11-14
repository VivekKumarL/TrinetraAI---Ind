"use client";

import Header from "@/components/p1/Header";
import ResultModal from "@/components/p1/ResultModal";
import ScanForm from "@/components/p1/ScanForm";
import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { ResultData } from "@/types/resultData";

type ScanProgress = ResultData;

interface ApiResponse {
  data: {
    data: {
      safe?: string;
      dns_http_features?: Record<string, unknown>;
      ssl_features?: Record<string, unknown>;
      scraping_features?: Record<string, unknown>;
      screenshots?: string[];
    };
  };
}

const TrinetraAIP1 = () => {
  const [url, setUrl] = useState("");
  const [scanProgress, setScanProgress] = useState<ScanProgress | null>(null);
  const [urlError, setUrlError] = useState<string | undefined>();
  const [isComplete, setIsComplete] = useState(false);

  const isValidUrl = (input: string) => {
    try {
      new URL(input);
      return /^https?:\/\//.test(input);
    } catch {
      return false;
    }
  };

  const formatKey = (key: string) =>
    key
      .replace(/_/g, " ")
      .replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
      );

  const transformKeysToProperCase = (obj: unknown): unknown => {
    if (!obj || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(transformKeysToProperCase);

    return Object.entries(obj as Record<string, unknown>).reduce(
      (acc, [key, value]) => {
        acc[formatKey(key)] = transformKeysToProperCase(value);
        return acc;
      },
      {} as Record<string, unknown>
    );
  };

  const scanMutation = useMutation({
    mutationFn: async (scanUrl: string): Promise<boolean> => {
      const cleanedUrl = scanUrl.trim();

      // Initial loading state
      const initial: ScanProgress = {
        safe: "loading",
        dns_http_features: "loading",
        ssl_features: "loading",
        extracted_scraping_features: "loading",
        screenshots: "loading",
      };
      setScanProgress(initial);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock response based on URL (demo)
      const mockSafeSites = ["https://example.com", "https://safe-site.com"];
      const safe = mockSafeSites.some((site) => cleanedUrl.startsWith(site))
        ? "safe"
        : "unsafe";

      setScanProgress({
        safe,
        dns_http_features:
          safe === "safe"
            ? {
                "DNS Lookup": "8.8.8.8",
                "HTTP Version": "HTTP/2",
                "Secure Connection": true,
              }
            : {},
        ssl_features:
          safe === "safe"
            ? { "Certificate Authority": "Let's Encrypt", "SSL Grade": "A+" }
            : {},
        extracted_scraping_features:
          safe === "safe"
            ? { "Meta Title": "Example Site", "Number of Links": 42 }
            : {},
        screenshots:
          safe === "safe" ? ["screenshot1.png", "screenshot2.png"] : [],
      });

      return true;
    },
    onSuccess: () => setIsComplete(true),
  });

  const handleScan = () => {
    setScanProgress(null);
    setUrlError(undefined);
    setIsComplete(false);

    if (!url) return setUrlError("URL cannot be empty");
    if (!isValidUrl(url))
      return setUrlError("Invalid URL. Include http:// or https://");

    scanMutation.mutate(url);
  };

  const closeModal = () => {
    setScanProgress(null);
    setUrlError(undefined);
    setIsComplete(false);
  };

  return (
    <div className="min-h-[90vh] mx-auto max-w-md md:max-w-5xl">
      <Header />

      <div className="max-w-3xl mx-auto px-4">
        <ScanForm
          url={url}
          onChange={setUrl}
          onSubmit={handleScan}
          urlError={urlError}
        />
      </div>

      {(scanProgress || isComplete) && (
        <ResultModal
          result={scanProgress} // <-- use scanProgress
          url={url} // <-- use entered URL
          onClose={closeModal} // <-- use modal close handler
        />
      )}
    </div>
  );
};

export default TrinetraAIP1;
