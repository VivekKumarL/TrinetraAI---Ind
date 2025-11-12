"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "/cyberattackglobe.jpg",
  "/globethree.png",
  "/cyberattacktwo.jpg",
];

export default function LayoutContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto min-h-screen flex flex-col">
      {/* Top Part - Slider */}
      <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center mask-b-from-50% mask-t-from-50% mask-radial-[50%_90%] mask-radial-from-80%">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Logo */}

        <div className="absolute z-[5]">
          {/* <Image src="/TrinetraAIlogowithoutbackground.png" alt="Company Logo" width={120} height={120} /> */}
        </div>
      </div>

      {/* Bottom Part - Content */}
      <Card className="w-full rounded-none border-0 border-none bg-transparent">
        <CardContent className="text-center py-8 px-4 md:px-10">
          {/* <p className="text-sm mb-2">Your Caption Here</p> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Because Every Website Needs a Watchful AI.</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
           TrinetraAI scans your website for vulnerabilities & detects live attacks in real-time. Get instant alerts & detailed security reports.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
