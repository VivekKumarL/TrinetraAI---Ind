"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface ScreenshotViewerProps {
  screenshots: string[] | "loading";
}

const ScreenshotViewer: React.FC<ScreenshotViewerProps> = ({ screenshots }) => {
  if (screenshots === "loading") {
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
        <p className="text-gray-500">Loading screenshots...</p>
      </div>
    );
  }

  const validScreenshots = Array.isArray(screenshots)
    ? screenshots.filter((s: string) => s.trim() !== "")
    : [];

  if (validScreenshots.length === 0) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
      <div className="flex flex-wrap gap-4">
        {validScreenshots.map((screenshot, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Image
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                width={300}
                height={200}
                className="flex-1 min-w-[200px] h-auto border rounded cursor-pointer object-cover"
              />
            </DialogTrigger>

            <DialogContent
              className="max-w-[96vw] max-h-[96vh] p-0 bg-black border-none flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Clicking on image closes dialog */}
                <DialogClose asChild>
                  <Image
                    src={screenshot}
                    alt="Full Screenshot"
                    width={1600}
                    height={1000}
                    className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg cursor-pointer"
                  />
                </DialogClose>

                {/* Close button */}
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close"
                    className="absolute top-3 right-3 text-white text-3xl"
                  >
                    ✕
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotViewer;
