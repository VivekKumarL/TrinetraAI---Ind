"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const customers = [
  { src: "/yourlogo.svg", alt: "Customer 1" },
  { src: "/yourlogo.svg", alt: "Customer 2" },
  { src: "/yourlogo.svg", alt: "Customer 3" },
  { src: "/yourlogo.svg", alt: "Customer 4" },
  { src: "/yourlogo.svg", alt: "Customer 5" },
  { src: "/yourlogo.svg", alt: "Customer 6" },
];

const CustomersSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full flex flex-col items-center text-center py-20 px-6">
      <p className="text-3xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
        Never Sleep on Security <br/> TrinetraAI Watches Your Site 24/7
      </p>
      <img src="/TrinetraAIlogo.gif" width={580} alt="" />

      {/*<div
        className="relative mt-12 grid grid-cols-3 gap-8 max-w-4xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {customers.map((customer, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              isHovered ? "blur-sm opacity-60" : ""
            }`}
          >
            <Image
              src={customer.src}
              alt={customer.alt}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))} */}

      {/* {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl">
            <Button size="lg" variant="secondary">
              More Customers
            </Button>
          </div>
        )} 
      </div>*/}
    </section>
  );
};

export default CustomersSection;
