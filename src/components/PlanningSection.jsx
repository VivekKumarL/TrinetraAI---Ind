"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Box, ChartNoAxesColumn, ChartPie, Diamond } from "lucide-react";

const PlanningSection = () => {
  return (
    <section className="py-16 px-4 space-y-10 max-w-5xl mx-auto ">
      {/* Top Text Section */}
      <div className="max-w-4xl mx-auto text-left space-y-4">
        <div>
          <span className="text-xs font-medium uppercase">
            Why TrinetraAI?
          </span>
          <h2 className="text-4xl font-bold">Automated AI Security </h2>
        </div>

        <p className="text-gray-500 w-sm">
          No manual effort,
          <span className="text-white">AI does the work for you.</span>{" "}
        </p>
      </div>
      {/* Full Width Image */}
      <div className="w-full">
        <Image
          src="/trinetraPoster2.png"
          alt="Full Width"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg object-cover mask-b-from-20% mask-b-to-80% "
        />
      </div>

      {/* Separator */}
      <Separator />

      {/* Two-Part Section */}
      <div className="relative flex flex-wrap md:flex-nowrap">
        {/* Left */}
        <div className="flex-1 space-y-4">
          <div className="pe-8 ps-8">
            {" "}
            {/* pe = padding-end, ps = padding-start */}
            <h3 className="text-2xl font-semibold">Real-Time Protection</h3>
            <p className="text-gray-600">
              Identify and respond to threats before they attack.
            </p>
            <Image
               src="/trinetraPoster2.png"
              alt="Left Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover mt-4 mask-r-from-30% mask-b-from-20% mask-b-to-80%"
            />
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="w-px bg-gray-300 mx-4"></div>

        {/* Right */}
        <div className="flex-1 space-y-4">
          <div className="pe-8 ps-8">
            <h3 className="text-2xl font-semibold">User-Friendly Platform</h3>
            <p className="text-gray-600">
              Security should be simple and effective, even for non- technical
              users.
            </p>
            <Image
            src="/trinetraPoster2.png"
              alt="Right Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover mt-4 mask-r-from-20% mask-r-to-75%"
            />
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator />

      {/* Next Two-Part Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Scalable & Cost-Effective</h3>
          <p className="text-gray-600">
            Security should be simple and effective, even for non- technical
            users.
          </p>
          <Separator className="w-2" />
          <h3 className="text-3xl font-bold">Continuous Innovation</h3>
          <p className="text-gray-600">
            We are constantly evolving to stay ahead of emerging cyber threats.
          </p>
          {/*<div className="space-y-3 flex flex-col items-baseline ">
            <Button variant="ghost" className="cursor-pointer font-bold">
              Start Free Trial
            </Button>
            <Button variant="ghost" className="cursor-pointer font-bold">
              View Plans
            </Button>
            <Button variant="ghost" className="cursor-pointer font-bold">
              Contact Sales
            </Button> 
          </div>*/}
        </div>

        {/* Right */}
        <div>
          <Image
           src="/trinetraPoster2.png"
            alt="Side Image"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      {/* Separator */}
      <Separator />
      {/* Four Divs with Captions */}
      <div className="grid md:grid-cols-4 gap-6 pt-12">
        <div className="text-left space-y-2 text-sm max-w-[10rem]">
          <div className="flex items-center space-x-2">
            <span>
              <ChartPie className="rotate-135" />
            </span>
            <span className="font-semibold text-white">Progress insights</span>
          </div>
          <span className="block font-medium text-gray-600">
            Track scope, velocity, and progress over time.
          </span>
        </div>
        <div className="text-left space-y-2 text-sm max-w-[10rem]">
          <div className="flex items-center space-x-2">
            <span>
              <Box />
            </span>
            <span className="font-semibold text-white">Progress insights</span>
          </div>
          <span className="block font-medium text-gray-600">
            Track scope, velocity, and progress over time.
          </span>
        </div>
        <div className="text-left space-y-2 text-sm max-w-[10rem]">
          <div className="flex items-center space-x-2">
            <span>
              <Diamond className="text-white" fill="currentColor" />
            </span>
            <span className="font-semibold text-white">Progress insights</span>
          </div>
          <span className="block font-medium text-gray-600">
            Track scope, velocity, and progress over time.
          </span>
        </div>
        <div className="text-left space-y-2 text-sm max-w-[10rem]">
          <div className="flex items-center space-x-2">
            <span>
              <ChartNoAxesColumn />
            </span>
            <span className="font-semibold text-white">Progress insights</span>
          </div>
          <span className="block font-medium text-gray-600">
            Track scope, velocity, and progress over time.
          </span>
        </div>
      </div>
    </section>
  );
};
export default PlanningSection;
