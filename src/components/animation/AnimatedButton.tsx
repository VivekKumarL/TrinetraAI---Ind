"use client"
import { motion } from "framer-motion";

export default function AnimatedButton({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#eab308" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-6 py-3 bg-yellow-500 text-white rounded-xl"
    >
      {label}
    </motion.button>
  );
}
