"use client";

import Header from "@/components/p1/Header";
import ResultModal from "@/components/p1/ResultModal";
import ScanForm from "@/components/p1/ScanForm";
import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Define types for scan progress and API response
interface ScanProgress {
  safe: string;
  dns_http_features: Record<string, unknown> | "loading";
  ssl_features: Record<string, unknown> | "loading";
  extracted_scraping_features: Record<string, unknown> | "loading";
  screenshots: string[] | "loading";
}

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
  const router = useRouter();

  useEffect(() => {
    // If you want to enforce login in future, uncomment below
    // const token = localStorage.getItem("trinetra_access_token");
    // if (!token) {
    //   toast.error("Please login to use the scanner.");
    //   router.push("/login");
    // }
  }, [router]);

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
    if (obj === null || obj === undefined) return obj;
    if (Array.isArray(obj)) return obj.map(transformKeysToProperCase);
    if (typeof obj !== "object") return obj;

    return Object.entries(obj as Record<string, unknown>).reduce<
      Record<string, unknown>
    >((acc, [key, value]) => {
      acc[formatKey(key)] = transformKeysToProperCase(value);
      return acc;
    }, {});
  };

  const scanMutation = useMutation({
    mutationFn: async (scanUrl: string): Promise<boolean> => {
      const token = localStorage.getItem("trinetra_access_token");
      if (!token) {
        toast.error("Please login first.");
        throw new Error("Not Authenticated");
      }

      const stepEndpoints = [
        "https://apiv2.TrinetraAI.com/check-url/step-1",
        "https://apiv2.TrinetraAI.com/check-url/step-2",
        "https://apiv2.TrinetraAI.com/check-url/step-3",
        "https://apiv2.TrinetraAI.com/check-url/step-4",
        "https://apiv2.TrinetraAI.com/check-url/step-5-screenshots",
      ];

      const cleanedUrl = scanUrl.trim();

      const initialProgress: ScanProgress = {
        safe: "loading",
        dns_http_features: "loading",
        ssl_features: "loading",
        extracted_scraping_features: "loading",
        screenshots: "loading",
      };
      setScanProgress(initialProgress);

      for (let i = 0; i < stepEndpoints.length; i++) {
        try {
          const res = (await axiosInstance.post(stepEndpoints[i], {
            url: cleanedUrl,
          })) as ApiResponse;

          if (i === 0) {
            const safeStatus =
              res.data?.data?.safe?.trim().toLowerCase() || "unknown";
            setScanProgress((prev) => ({
              ...(prev ?? initialProgress),
              safe: safeStatus,
            }));
          }
          if (i === 1 && res.data.data.dns_http_features) {
            setScanProgress((prev) => ({
              ...(prev ?? initialProgress),
              dns_http_features: transformKeysToProperCase(
                res.data.data.dns_http_features
              ) as Record<string, unknown>,
            }));
          }
          if (i === 2 && res.data.data.ssl_features) {
            setScanProgress((prev) => ({
              ...(prev ?? initialProgress),
              ssl_features: res.data.data.ssl_features as Record<
                string,
                unknown
              >,
            }));
          }
          if (i === 3 && res.data.data.scraping_features) {
            setScanProgress((prev) => ({
              ...(prev ?? initialProgress),
              extracted_scraping_features: transformKeysToProperCase(
                res.data.data.scraping_features
              ) as Record<string, unknown>,
            }));
          }
          if (i === 4 && res.data.data.screenshots) {
            setScanProgress((prev) => ({
              ...(prev ?? initialProgress),
              screenshots: res.data.data.screenshots || [],
            }));
          }
        } catch (error) {
          console.error(`Step ${i + 1} failed`, error);
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

    if (!url) {
      setUrlError("URL cannot be empty");
      return;
    }
    if (!isValidUrl(url)) {
      setUrlError("Invalid URL. Include http:// or https://");
      return;
    }

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
          result={scanProgress}
          safe={scanProgress?.safe}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default TrinetraAIP1;
