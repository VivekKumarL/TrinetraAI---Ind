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
    key.replace(/_/g, " ").replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
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
      const token = localStorage.getItem("trinetra_access_token");
      if (!token) {
        toast.error("Please login first.");
        throw new Error("Not Authenticated");
      }

      const endpoints = [
        "https://apiv2.TrinetraAI.com/check-url/step-1",
        "https://apiv2.TrinetraAI.com/check-url/step-2",
        "https://apiv2.TrinetraAI.com/check-url/step-3",
        "https://apiv2.TrinetraAI.com/check-url/step-4",
        "https://apiv2.TrinetraAI.com/check-url/step-5-screenshots",
      ];

      const cleanedUrl = scanUrl.trim();

      const initial: ScanProgress = {
        safe: "loading",
        dns_http_features: "loading",
        ssl_features: "loading",
        extracted_scraping_features: "loading",
        screenshots: "loading",
      };
      setScanProgress(initial);

      for (let i = 0; i < endpoints.length; i++) {
        try {
          const res = (await axiosInstance.post(endpoints[i], {
            url: cleanedUrl,
          })) as ApiResponse;

          const data = res.data.data;

          if (i === 0) {
            const safeStatus = data.safe?.trim().toLowerCase() ?? "unknown";
            setScanProgress((prev) => ({ ...(prev ?? initial), safe: safeStatus }));
          }

          if (i === 1 && data.dns_http_features) {
            setScanProgress((prev) => ({
              ...(prev ?? initial),
              dns_http_features: transformKeysToProperCase(data.dns_http_features) as Record<string, unknown>,
            }));
          }

          if (i === 2 && data.ssl_features) {
            setScanProgress((prev) => ({
              ...(prev ?? initial),
              ssl_features: data.ssl_features,
            }));
          }

          if (i === 3 && data.scraping_features) {
            setScanProgress((prev) => ({
              ...(prev ?? initial),
              extracted_scraping_features: transformKeysToProperCase(data.scraping_features) as Record<
                string,
                unknown
              >,
            }));
          }

        } catch (err) {
          console.error(`Step ${i + 1} failed`, err);
        }
      }

      return true;
    },

    onSuccess: () => setIsComplete(true),
    onError: (error) => {
      if (error instanceof Error && error.message !== "Not Authenticated") {
        toast.error("Scan failed.");
      }
    },
  });

  const handleScan = () => {
    setScanProgress(null);
    setUrlError(undefined);
    setIsComplete(false);

    if (!url) return setUrlError("URL cannot be empty");
    if (!isValidUrl(url)) return setUrlError("Invalid URL. Include http:// or https://");

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
        <ScanForm url={url} onChange={setUrl} onSubmit={handleScan} urlError={urlError} />
      </div>

      {(scanProgress || isComplete) && (
        <ResultModal
          result={scanProgress}
          safe={scanProgress?.safe}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default TrinetraAIP1;
