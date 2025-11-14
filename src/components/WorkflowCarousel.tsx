"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Card {
  image: string;
  title: string;
  desc: string;
}

interface Props {
  cards: Card[];
}

const WorkflowCarousel: React.FC<Props> = ({ cards }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {cards.map((card, idx) => (
            <CarouselItem
              key={idx}
              className="md:basis-1/3 sm:basis-1/2 basis-full"
            >
              <div className="p-4">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="mx-auto rounded-xl"
                  />
                  <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{card.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default WorkflowCarousel;
