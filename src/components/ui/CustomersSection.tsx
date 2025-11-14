"use client";

import Image from "next/image";

const CustomersSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center py-20 px-6">
      <p className="text-3xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
        Never Sleep on Security <br /> TrinetraAI Watches Your Site 24/7
      </p>

      {/* ✅ Replaced <img> with Next.js optimized <Image /> */}
      <div className="mt-8">
        <Image
          src="/Trinetralogo.png"
          width={580}
          height={320}
          alt="TrinetraAI logo"
          priority
          className="rounded-xl object-contain"
        />
      </div>
    </section>
  );
};

export default CustomersSection;
