"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRightIcon } from "lucide-react";

const cards = [
  {
    image: "/trinetraPoster2.png",
    title: "Slack Integration",
    desc: "AI-Powered Phishing Detection",
  },
  {
    image: "/trinetraPoster2.png",
    title: "GitHub Sync",
    desc: "AI-Based Web Penetration Testing",
  },
  {
    image: "/trinetraPoster2.png",
    title: "Figma Plugin",
    desc: "AI-Driven Threat Intelligence & Monitoring",
  },
  {
    image: "/trinetraPoster2.png",
    title: "Zapier Automations",
    desc: "Secure Code Analysis",
  },
  {
    image: "/trinetraPoster2.png",
    title: "Google Calendar",
    desc: "AI-Powered Cybersecurity API",
  },
  // {
  //   image: "/trinetraPoster2.png",
  //   title: "Notion Link",
  //   desc: "Link project docs and tasks from Notion easily.",
  // },
  // {
  //   image: "/trinetraPoster2.png",
  //   title: "Jira Importer",
  //   desc: "Migrate issues from Jira with one click.",
  // },
  // {
  //   image: "/trinetraPoster2.png",
  //   title: "Slack Integration",
  //   desc: "Get instant project updates directly in your Slack channels.",
  // },
];

export default function WorkflowCarousel() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Carousel className="relative">
        <CarouselContent className="-ml-8">
          {cards.map((card, i) => (
            <CarouselItem
              key={i}
              className="
                pl-8 shrink-0
                basis-full
                sm:basis-[80%]
                md:basis-[40%]
                lg:basis-[28.5%]
                scroll-snap-start
              "
            >
              <Card>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="space-y-2 p-3">
                  {/* <h3 className="text-xs font-normal text-muted-foreground">
                    {card.title}
                  </h3> */}
                  <div className="flex justify-between items-center pt-1">
                    <p className="text-xs leading-[1.5] font-medium w-[12rem]">
                      {card.desc}
                    </p>
                    <Button
                      variant="link"
                      className="p-4 text-sm flex items-center border rounded-full"
                    >
                      <ChevronRightIcon />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6 absolute left-1/2 -translate-x-1/2 -bottom-10">
          <CarouselPrevious>
            <Button variant="outline" size="icon" aria-label="Previous">
              ←
            </Button>
          </CarouselPrevious>
          <CarouselNext>
            <Button variant="outline" size="icon" aria-label="Next">
              →
            </Button>
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
