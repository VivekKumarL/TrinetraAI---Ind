"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ScreenshotViewerProps {
  screenshots: string[];
}

const ImageViewer: React.FC<ScreenshotViewerProps> = ({ screenshots }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const validScreenshots = screenshots.filter((s: string) => s.trim() !== "");

  if (validScreenshots.length === 0) return null;

  return (
    <div>
      {/* <strong>Screenshots</strong> */}
      <div className="flex flex-wrap gap-4 mt-4 bg-gray-500 rounded-4xl w-full h-full">
        {validScreenshots.map((screenshot, index) => (
          <Image
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            width={300}
            height={200}
            className="flex-1 min-w-[200px] h-auto border rounded cursor-pointer object-cover"
            onClick={() => setSelectedImage(screenshot)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="absolute top-4 right-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close"
              className="text-white text-3xl"
            >
              ✕
            </Button>
          </div>

          <Image
            src={selectedImage}
            alt="Full Screenshot"
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
