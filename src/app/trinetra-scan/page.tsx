"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";
import Header from "@/components/p1/Header";
import ScanForm from "@/components/p1/ScanForm";
import ResultModal from "@/components/p1/ResultModal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const TrinetraAIP1 = () => {
  const [url, setUrl] = useState("");
  const [scanProgress, setScanProgress] = useState<any>(null);
  const [urlError, setUrlError] = useState<string | undefined>();
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("trinetra_access_token");
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
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );

  const transformKeysToProperCase = (obj: any): any => {
    if (obj === null || obj === undefined) return obj;
    if (Array.isArray(obj)) return obj.map(transformKeysToProperCase);
    if (typeof obj !== "object") return obj;

    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[formatKey(key)] = transformKeysToProperCase(value);
      return acc;
    }, {} as any);
  };

  const scanMutation = useMutation({
    mutationFn: async (url: string) => {
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

      const cleanedUrl = url.trim();

      const initialProgress = {
        safe: "loading",
        dns_http_features: "loading",
        ssl_features: "loading",
        extracted_scraping_features: "loading",
        screenshots: "loading",
      };
      setScanProgress(initialProgress);

      for (let i = 0; i < stepEndpoints.length; i++) {
        try {
          const res = await axiosInstance.post(stepEndpoints[i], {
            url: cleanedUrl,
          });

          if (i === 0) {
            setScanProgress((prev: any) => ({
              ...prev,
              safe: res.data.data.trim().toLowerCase() || "unknown",
            }));
          }
          if (i === 1) {
            setScanProgress((prev: any) => ({
              ...prev,
              dns_http_features: transformKeysToProperCase(
                res.data.data.dns_http_features
              ),
            }));
          }
          if (i === 2) {
            setScanProgress((prev: any) => ({
              ...prev,
              ssl_features: res.data.data.ssl_features, // <- only inner object
            }));
          }
          if (i === 3) {
            setScanProgress((prev: any) => ({
              ...prev,
              extracted_scraping_features: transformKeysToProperCase(
                res.data.data.scraping_features
              ), // <- only inner object
            }));
          }
          if (i === 4) {
            setScanProgress((prev: any) => ({
              ...prev,
              screenshots: res.data.data.screenshots || [],
            }));
          }
        } catch (err) {
          console.error(`Step ${i + 1} failed`, err);
        }
      }

      return true;
    },
    onSuccess: () => {
      setIsComplete(true);
    },
    onError: (err: any) => {
      if (err.message !== "Not Authenticated") {
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
