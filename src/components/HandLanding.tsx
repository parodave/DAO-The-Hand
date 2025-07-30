'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Gem, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface FingerProps {
  id: number;
  name: string;
  position: string;
  delay: number;
}

const enterprises = [
  { id: 1, name: "TechDAO", position: "thumb" },
  { id: 2, name: "RealEstateDAO", position: "index" },
  { id: 3, name: "EcommerceDAO", position: "middle" },
  { id: 4, name: "BrandingDAO", position: "ring" },
  { id: 5, name: "Web3DAO", position: "pinky" }
];

const Finger = ({ id, name, position, delay }: FingerProps) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const fingerPositions = {
    thumb: "absolute top-32 left-20 w-16 h-32 rotate-45",
    index: "absolute top-8 left-32 w-12 h-40",
    middle: "absolute top-4 left-44 w-12 h-44",
    ring: "absolute top-8 left-56 w-12 h-40",
    pinky: "absolute top-16 left-68 w-10 h-32"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`${fingerPositions[position as keyof typeof fingerPositions]} cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/dao/${id}`)}
    >
      {/* Finger */}
      <motion.div
        className="w-full h-full bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 rounded-full relative overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Emerald glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-emerald-400/10 to-transparent rounded-full"
          animate={{
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Sparkle effects */}
        <motion.div
          className="absolute top-2 left-1/2 transform -translate-x-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
        </motion.div>
      </motion.div>

      {/* Finger label */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-emerald-400 text-sm font-semibold bg-gray-900/80 px-2 py-1 rounded-lg backdrop-blur-sm">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
};

const HandLanding = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-gray-900/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent mb-4">
            DAO HAND
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            5 Entreprises • 99 Tokens chacune • 1 Trésor Central
          </p>
        </motion.div>

        {/* Hand container */}
        <div className="relative w-96 h-96 mx-auto">
          {/* Palm */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-full shadow-2xl"
          >
            {/* Central treasure */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              whileHover={{ scale: 1.1 }}
              onClick={() => router.push('/dashboard')}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 40px rgba(16, 185, 129, 0.8)",
                  "0 0 20px rgba(16, 185, 129, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Gem className="w-8 h-8 text-white" />
              </div>
              
              {/* Treasure label */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="text-emerald-400 text-sm font-semibold bg-gray-900/80 px-2 py-1 rounded-lg backdrop-blur-sm">
                  Trésor Central
                </span>
              </motion.div>
            </motion.div>

            {/* Palm glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent rounded-full"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Fingers */}
          {enterprises.map((enterprise, index) => (
            <Finger
              key={enterprise.id}
              id={enterprise.id}
              name={enterprise.name}
              position={enterprise.position}
              delay={0.5 + index * 0.1}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">495</div>
            <div className="text-gray-300">Membres Maximum</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">$999</div>
            <div className="text-gray-300">Droit d'Entrée</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">5</div>
            <div className="text-gray-300">Entreprises DAO</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HandLanding;