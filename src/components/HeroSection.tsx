"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  // this Typerwriter effect run only one time
  // const fullText =
  //   "TrinetraAI – 1st AI Guardian Watching Over Your Digital World";
  // const [displayedText, setDisplayedText] = useState("");

  // useEffect(() => {
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     setDisplayedText(fullText.slice(0, i + 1));
  //     i++;
  //     if (i === fullText.length) clearInterval(interval);
  //   }, 50); // typing speed
  //   return () => clearInterval(interval);
  // }, []);

  const text = "TrinetraAI – Your Website’s Third Eye";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startTyping = () => {
      let i = 0;
      setDisplayedText(""); // clear text before restart

      typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          restartTimeout = setTimeout(startTyping, 5000); // restart after 5 sec
        }
      }, 80); // typing speed
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, [text]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center p-8">
      <div className="max-w-3xl">
        <motion.h1
          className="text-5xl font-bold mb-4 text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.h2
          className="text-lg my-5 leading-[1.5] text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Powered by advanced AI, TrinetraAI continuously scans your website for vulnerabilities, detects live attacks in real time, and delivers instant alerts with actionable security reports.  Find flaws before hackers do. Stop threats as they happen. Stay protected, always.  AI-driven. Attack-ready. Future-proof.
        </motion.h2>

        <motion.div
          className="flex gap-4 justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} // smooth
          className="w-full flex justify-center mt-10"
        >
          <Image
            src="/trinetraPoster.png"
            alt="Hero Illustration"
            width={1200}
            height={500}
            className="rounded-sm mask-t-from-50% "
            // className="rounded-xl shadow-lg -rotate-6 mask-b-from-10% mask-b-to-90"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
