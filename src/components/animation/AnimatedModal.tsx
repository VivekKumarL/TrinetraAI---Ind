"use client"
import { motion } from "framer-motion";

export default function AnimatedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold"></h2>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Close</button>
      </div>
    </motion.div>
  );
}
