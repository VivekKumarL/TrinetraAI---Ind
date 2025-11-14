"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ResultTables from "./ResultTables";
import ScreenshotViewer from "./ScreenshotViewer";
import { ResultData } from "@/types/resultData";
import { SAFE_SITES } from "@/zdata/safeSites";
import { MALICIOUS_SITES } from "@/zdata/maliciousSites";

// --- Phishing-proof safeStatus helper ---
function extractDomain(url: string): string | null {
  try {
    const u = new URL(url.trim());
    return u.hostname; // e.g., flipkart.com
  } catch {
    return null;
  }
}

function normalizeDomain(domain: string): string {
  return domain.trim();
}

function getSafeStatus(url: string): "safe" | "unsafe" | "suspicious" {
  const domain = extractDomain(url);

  if (!domain) return "suspicious"; // invalid URL

  const normalized = normalizeDomain(domain);

  // 1️⃣ EXACT match (case-sensitive) for SAFE sites
  const isExactSafe = SAFE_SITES.some(
    (site) => normalizeDomain(new URL(site).hostname) === normalized
  );
  if (isExactSafe) return "safe";

  // 2️⃣ EXACT match for MALICIOUS sites
  const isExactMalicious = MALICIOUS_SITES.some(
    (site) => normalizeDomain(new URL(site).hostname) === normalized
  );
  if (isExactMalicious) return "unsafe";

  // 3️⃣ Not in any list → treat as suspicious
  return "suspicious";
}

// --- Props ---
interface ResultModalProps {
  result: ResultData | null;
  url: string; // user-entered URL
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, url, onClose }) => {
  const normalizedScreenshots =
    result?.screenshots === "loading"
      ? "loading"
      : Array.isArray(result?.screenshots)
      ? result.screenshots.map((s) => (typeof s === "string" ? s : s.url || "")).filter(Boolean)
      : [];

  // --- Use the new secure safeStatus function ---
  const safeStatus = getSafeStatus(url);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl sm:max-w-6xl overflow-y-auto max-h-[90vh] p-0">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <DialogTitle className="text-2xl font-bold">Scan Progress</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="px-6 py-4 space-y-6">
          {safeStatus === "suspicious" && (
            <h2 className="text-yellow-600 text-xl font-semibold">
              Suspicious Site ⚠️ — Something looks unusual or fishy!
            </h2>
          )}

          {safeStatus === "safe" && (
            <h2 className="text-green-600 text-xl font-semibold">Site is safe ✅</h2>
          )}

          {safeStatus === "unsafe" && (
            <h2 className="text-red-600 text-xl font-semibold">Site is unsafe ❌</h2>
          )}

          {/* Show ResultTables only if safe */}
          {safeStatus === "safe" ? (
            <ResultTables result={result} safeStatus={safeStatus} />
          ) : (
            <p className="text-red-500 font-medium">
              Cannot display site data — site is malicious or suspicious.
            </p>
          )}

          {/* Show screenshots only if safe */}
          {safeStatus === "safe" && normalizedScreenshots && normalizedScreenshots !== "loading" && (
            <ScreenshotViewer screenshots={normalizedScreenshots} />
          )}

          {safeStatus === "safe" && normalizedScreenshots === "loading" && (
            <p className="text-sm text-gray-500">Loading screenshots...</p>
          )}
        </div>

        <DialogFooter className="px-6 py-4 border-t">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
