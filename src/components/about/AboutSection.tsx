"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-16 space-y-16">
      {/* Top Part */}

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-4 ">
          About Us - TrinetraAI <br /> Pioneering AI-Powered Cybersecurity
        </h1>
      </div>

      {/* Middle Part with Framer Motion Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // start right off screen
        animate={{ opacity: 1, x: 0 }} // animate into place
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center"
      >
        <Image
          src="/dashboardlayoutclean.png"
          alt="About Illustration"
          width={800}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* top Part */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left */}
        <div className="max-w-sm">
          <h2 className="text-3xl font-semibold leading-tight">
            Welcome to the Future of Digital Defense
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <p className="text-base ">
            In today’s interconnected world, cybersecurity is no longer
            optional—it’s essential. As cyber threats grow smarter and faster,
            traditional defenses struggle to keep pace.
          </p>
          <p className="text-base">
            At TrinetraAI, we’re redefining security with an AI-powered
            ecosystem that’s intelligent, proactive, and seamless. Our mission?
            To protect businesses, developers, and individuals with cutting-edge
            solutions that neutralize risks before they strike.
          </p>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left */}
        <div className="space-y-4">
          <p className="text-base ">
            We’re here to revolutionize cybersecurity. Our goal is to eliminate
            complexity and deliver enterprise-grade protection that’s accessible
            to all. By blending advanced AI with state-of- the-art security
            research, we provide tools that don’t just react to threats—they
            anticipate and prevent them.
          </p>
          <p className="text-base">
            At TrinetraAI, we’re building a world where security is proactive,
            self-learning, and always one step ahead.
          </p>
        </div>
        {/* Right */}
        <div className="max-w-sm text-right">
          <h2 className="text-3xl font-semibold leading-tight">Our Mission</h2>
        </div>
      </div>
    </div>
  );
}
