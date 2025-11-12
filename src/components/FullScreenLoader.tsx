"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FullScreenLoaderProps {
  children: React.ReactNode;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ children }) => {
  const [stage, setStage] = useState<"show" | "fade" | "slide" | "done">(
    "show"
  );

  useEffect(() => {
    const t1 = setTimeout(() => setStage("fade"), 2000);
    const t2 = setTimeout(() => setStage("slide"), 3000);
    const t3 = setTimeout(() => setStage("done"), 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Variants for loader container
  const containerVariants: Variants = {
    show: { y: 0 },
    slide: { y: "-100%", transition: { duration: 1 } },
  };

  // Variants for image/logo
  const logoVariants: Variants = {
    show: { scale: 1, opacity: 1 },
    fade: { scale: 0.5, opacity: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <AnimatePresence>
        {stage !== "done" && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-[9999] px-4"
            variants={containerVariants}
            initial="show"
            animate={stage === "slide" ? "slide" : "show"}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-3/5 sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/6 p-2 rounded-2xl"
              variants={logoVariants}
              initial="show"
              animate={stage === "fade" ? "fade" : "show"}
            >
              <img
                src="/TrinetraAIdigitallogowhite.png"
                alt="TrinetraAI Loader"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        className={`min-h-screen transition-opacity duration-700 ${
          stage === "done" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default FullScreenLoader;
