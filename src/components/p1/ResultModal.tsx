"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ResultTables from "./ResultTables";
import ScreenshotViewer from "./ScreenshotViewer";
import { ResultData } from "@/types/resultData";
import { SAFE_SITES } from "@/zdata/safeSites";

// ------------------------
// Utility: extract hostname from user URL
// ------------------------
function extractHostname(url: string): string | null {
  try {
    const u = new URL(url.trim());
    return u.hostname; // preserve original case
  } catch {
    return null; // invalid URL
  }
}

// ------------------------
// Check if site is safe (exact match, case-sensitive)
// ------------------------
function isSafeSite(userUrl: string): boolean {
  const hostname = extractHostname(userUrl);
  if (!hostname) return false;

  return SAFE_SITES.some((site) => {
    // Compare the user input exactly with the SAFE_SITES entry
    const safeHostname = site.startsWith("http") ? new URL(site).hostname : site;
    return hostname === safeHostname; // EXACT case-sensitive match
  });
}
// ------------------------
// Props
// ------------------------
interface ResultModalProps {
  result: ResultData | null;
  url: string; // user-entered URL
  onClose: () => void;
}

// ------------------------
// Component
// ------------------------
const ResultModal: React.FC<ResultModalProps> = ({ result, url, onClose }) => {
 const safeStatus = isSafeSite(url) ? "safe" : "unsafe"

  const normalizedScreenshots =
    result?.screenshots === "loading"
      ? "loading"
      : Array.isArray(result?.screenshots)
      ? result.screenshots.map((s) => (typeof s === "string" ? s : s.url || "")).filter(Boolean)
      : [];

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
          {safeStatus === "safe" && (
            <h2 className="text-green-600 text-xl font-semibold">Site is safe ✅</h2>
          )}

          {safeStatus === "unsafe" && (
            <h2 className="text-red-600 text-xl font-semibold">Site is unsafe ❌</h2>
          )}

          {safeStatus === "safe" ? (
            <ResultTables result={result} safeStatus={safeStatus} />
          ) : (
            <p className="text-red-500 font-medium">
              Cannot display site data — site is unsafe.
            </p>
          )}

          {safeStatus === "safe" &&
            normalizedScreenshots &&
            normalizedScreenshots !== "loading" && (
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
