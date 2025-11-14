"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Prefooter() {
  const textRef = useRef<HTMLHeadingElement>(null);

  const gibberishText =
    "&i-8DHk?vM%q with TrinetraAI The Future of ?D&Y6b!R%/cJ2mg";
  const realText = "Stay Secure with TrinetraAI – The Future of Cybersecurity!";

  // Scramble animation between two strings
  const scrambleBetween = (from: string, to: string) => {
    if (!textRef.current) return;

    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?><:{}[]";
    let iteration = 0;

    const interval = setInterval(() => {
      if (!textRef.current) return;

      textRef.current.innerText = to
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return to[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= to.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto max-h-[236px] w-full flex flex-col md:flex-row justify-between items-center px-6 py-8"
      style={{ minHeight: "236px" }}
    >
      {/* Left Text Part */}
      <div
        className="mb-6 md:mb-0 md:max-w-xl text-center md:text-left overflow-hidden  text-ellipsis"
        onMouseEnter={() => scrambleBetween(gibberishText, realText)}
        onMouseLeave={() => scrambleBetween(realText, gibberishText)}
      >
        <h3
          ref={textRef}
          className="text-lg md:text-3xl font-semibold mb-2 font-mono tracking-wide"
        >
          {gibberishText}
        </h3>
      </div>

      {/* Right Buttons Part */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="flex gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="lg">
            Talk to Sales
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg">Get Started</Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
