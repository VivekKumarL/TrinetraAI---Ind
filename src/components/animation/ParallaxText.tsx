"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText({ children }: { children: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={ref} className="overflow-hidden w-full h-[500px] relative ">
      <motion.h2
        style={{ y }}
        className="text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 w-full"
      >
        {children}
      </motion.h2>
    </div>
  );
}
