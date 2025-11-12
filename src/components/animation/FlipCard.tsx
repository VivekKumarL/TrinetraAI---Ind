"use client"
import { motion } from "framer-motion";

export default function FlipCard() {
  return (
    <motion.div
      whileHover={{ rotateY: 180 }}
      className="w-64 h-40 bg-yellow-500 text-white flex items-center justify-center rounded-lg cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div className="text-xl">Hover Me!</motion.div>
    </motion.div>
  );
}
