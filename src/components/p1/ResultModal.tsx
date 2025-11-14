"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ResultTables from "./ResultTables";
import ScreenshotViewer from "./ScreenshotViewer";
import { ResultData } from "@/types/resultData";

interface ResultModalProps {
  result: ResultData | null;
  safe: string | undefined;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, safe, onClose }) => {
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
          {safe === "loading" && <p className="text-sm text-gray-500">Loading Step-1: Safe Status...</p>}

          {safe && safe !== "loading" && (
            <h2
              className={`text-xl font-semibold ${
                safe === "safe" ? "text-green-600" : "text-red-600"
              }`}
            >
              {safe === "safe" ? "Site is safe ✅" : "Site is unsafe ❌"}
            </h2>
          )}

          <ResultTables result={result} />

          {normalizedScreenshots && normalizedScreenshots !== "loading" && (
            <ScreenshotViewer screenshots={normalizedScreenshots} />
          )}

          {normalizedScreenshots === "loading" && (
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
