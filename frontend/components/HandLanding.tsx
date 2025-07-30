'use client';
import { motion } from 'framer-motion';

export default function HandLanding() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <motion.div
        className="text-8xl sm:text-9xl text-black dark:text-white"
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration: 1.5 }}
      >
        👋
      </motion.div>
    </div>
  );
}
