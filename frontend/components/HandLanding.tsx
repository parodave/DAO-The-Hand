'use client';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function HandLanding() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="absolute top-4 right-4">
        <ConnectButton />
      </div>
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
