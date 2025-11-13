"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import ImageViewer from "../ImageViewer";
import { Separator } from "../ui/separator";

export default function TeamSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 space-y-12">
      {/* Top Label */}
      <div className="space-y-2">
        <p className="propercase text-sm font-medium text-muted-foreground">
          Team
        </p>
        {/* <div className="w-16 h-1 bg-primary rounded"></div> */}
        <Separator className="border-2 rounded-full" />
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            TrinetraAI is more than a cybersecurity company—we’re innovators at
            the forefront of AI-driven defense. Founded on the belief that
            security should be both powerful and effortless, we harness
            artificial intelligence to deliver real-time threat detection,
            automated protection, and adaptive intelligence. From startups to
            enterprises, we empower our clients to thrive in the digital age
            without fear of compromise.
          </p>
          <Button size="lg">Join Our Team</Button>
        </div>

        {/* Right Image with Caption */}
        <div className="space-y-4 h-full">
          <ImageViewer screenshots={["/teammember.jpg"]} />

          <figcaption className="text-sm text-muted-foreground text-center">
            The people behind our projects and ideas.
          </figcaption>
        </div>
      </div>
    </section>
  );
}
