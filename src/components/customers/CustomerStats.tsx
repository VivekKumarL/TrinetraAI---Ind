"use client";

import { Separator } from "../ui/separator";

export default function CustomerStats() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse sm:flex-row items-center sm:items-stretch gap-8">
      {/* Left part */}
      <div className="flex flex-col sm:flex-row gap-8 flex-1">
        {/* Stat 1 */}
        <div className="text-center sm:text-left">
          <p className="text-4xl font-bold text-blue-600">500+</p>
          <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
        </div>
        {/* Stat 2 */}
        <div className="text-center sm:text-left">
          <p className="text-4xl font-bold text-blue-600">10K+</p>
          <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
        </div>
      </div>

      {/* Separator */}
      <div className="flex h-24 items-center space-x-4 text-sm">
        <Separator orientation="vertical" />
      </div>

      {/* Right part */}
      <div className="flex-1 flex items-center justify-center text-center sm:text-left">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our team is trusted by thousands of clients across the globe to
          deliver scalable, reliable, and beautifully designed 
        </p>
      </div>
    </div>
  );
}
