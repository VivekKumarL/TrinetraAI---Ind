"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, Plus, ArrowRight, ChevronRight } from "lucide-react";

// Card item type
type CardItem = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
};

// Sample card data
const cardItems: CardItem[] = [
  {
    id: 1,
    title: "AI-Powered Phishing Detection",
    description:
      "Instantly identify and block malicious URLs before they harm your business.",
    imgSrc: "/trinetraPoster2.png",
  },
  {
    id: 2,
    title: "AI-Based Web Pentesting",
    description:
      " Detect vulnerabilities like XSS, SQL Injection, and more with AI-driven precision",
    imgSrc: "/trinetraPoster2.png",
  },
  {
    id: 3,
    title: "Real-Time Cyber Threat Analysis",
    description:
      "Stay ahead of zero-day attacks with an advanced AI security engine.",
    imgSrc: "/trinetraPoster2.png",
  },
];

const WhatMakesUsDifferent = () => {
  const [openItem, setOpenItem] = useState<CardItem | null>(null);

  return (
    <section className=" w-full py-20 px-6 max-w-6xl mx-auto my-11">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2  mb-16 items-center">
        <h2 className="text-4xl font-bold text-black dark:text-white lg:max-w-sm">
         See What Others Can’t.
        </h2>
        <div>
          <div>
            <p className="text-lg/6 text-gray-700 dark:text-gray-300 mb-6 lg:max-w-md ">
              TrinetraAI uses cutting-edge artificial intelligence to monitor your website 24/7 — identifying hidden vulnerabilities, blocking live attacks, and sending you real-time alerts the moment danger appears.  No more guessing. No more downtime. Just unbreakable web security.
              <span className="inline-flex items-center gap-2 ml-2 text-white font-bold">
                TrinetraAI: Because your website deserves a third eye. <ChevronRight size={18} />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border p-5 flex flex-col shadow-sm bg-white dark:bg-gray-900"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={400}
              height={200}
              className="rounded-lg object-cover mb-4"
            />
            <div className="flex items-center justify-between mt-auto">
              <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                {item.title}
              </span>
              <Button
                size="icon"
                variant="outline"
                onClick={() => setOpenItem(item)}
              >
                <Plus size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!openItem} onOpenChange={() => setOpenItem(null)}>
        <DialogContent className="w-screen h-screen max-w-none p-6 overflow-y-auto m-4">
          <DialogClose asChild>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
              <X size={24} />
            </button>
          </DialogClose>

          {openItem && (
            <div className="flex flex-col items-center justify-center h-full">
              <Image
                src={openItem.imgSrc}
                alt={openItem.title}
                width={800}
                height={400}
                className="rounded-lg mb-8 object-cover"
              />
              <DialogTitle className="text-4xl font-bold mb-4 text-center">
                {openItem.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl">
                {openItem.description}
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhatMakesUsDifferent;
