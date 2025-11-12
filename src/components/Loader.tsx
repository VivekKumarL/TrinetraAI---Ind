"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [stage, setStage] = useState("showSmile");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("fadeSmile"), 2000);
    const t2 = setTimeout(() => setStage("slideUp"), 3000);
    const t3 = setTimeout(() => setShowContent(true), 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      {/* Loader Overlay */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50 px-4"
            initial={{ y: 0 }}
            animate={stage === "slideUp" ? { y: "-100%" } : {}}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={
                stage === "fadeSmile"
                  ? { scale: 0.5, opacity: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 1 }}
            >
              <Image
                src="/TrinetraAIdigitallogowhite.png"
                alt="TrinetraAI Loader"
                width={300}
                height={300}
                className="w-3/5 sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/6 p-2 rounded-2xl"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        className={`min-h-screen transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Loader;
