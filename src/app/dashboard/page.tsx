'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Wallet, TrendingUp, Vote, Gem } from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-gray-900/20" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center">
            <button
              onClick={() => router.push('/')}
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mr-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Dashboard DAO
            </h1>
          </div>
        </motion.div>

        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/30 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Bienvenue dans la DAO</h2>
          <p className="text-emerald-200">Gérez vos tokens, participez aux votes et suivez vos revenus</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <Wallet className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">12</div>
            <div className="text-gray-400 text-sm">Tokens Détenus</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">$1,247</div>
            <div className="text-gray-400 text-sm">Revenus ce Mois</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <Vote className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-gray-400 text-sm">Votes Participés</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <Gem className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">$45,892</div>
            <div className="text-gray-400 text-sm">Trésor Central</div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mes Tokens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20"
          >
            <h3 className="text-xl font-bold text-white mb-6">Mes Tokens</h3>
            <div className="space-y-4">
              {[
                { name: 'TechDAO', tokens: 3, value: '$2,997' },
                { name: 'RealEstateDAO', tokens: 2, value: '$1,998' },
                { name: 'EcommerceDAO', tokens: 4, value: '$3,996' },
                { name: 'BrandingDAO', tokens: 2, value: '$1,998' },
                { name: 'Web3DAO', tokens: 1, value: '$999' }
              ].map((dao, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="text-white font-medium">{dao.name}</div>
                    <div className="text-gray-400 text-sm">{dao.tokens} tokens</div>
                  </div>
                  <div className="text-emerald-400 font-semibold">{dao.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Votes Actifs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20"
          >
            <h3 className="text-xl font-bold text-white mb-6">Propositions de Vote</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-medium mb-2">Augmenter le budget marketing TechDAO</h4>
                <p className="text-gray-400 text-sm mb-4">Proposition d'allouer 10k$ supplémentaires au marketing</p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors">
                    Pour
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Contre
                  </button>
                </div>
                <div className="mt-3 text-sm text-gray-400">
                  Votes: 67% Pour • Se termine dans 2 jours
                </div>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-medium mb-2">Nouveau partenariat Web3DAO</h4>
                <p className="text-gray-400 text-sm mb-4">Partenariat stratégique avec Chainlink</p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors">
                    Pour
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    Contre
                  </button>
                </div>
                <div className="mt-3 text-sm text-gray-400">
                  Votes: 89% Pour • Se termine dans 5 jours
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Revenue History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-6">Historique des Revenus</h3>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[
              { month: 'Jan', amount: 892 },
              { month: 'Fév', amount: 1156 },
              { month: 'Mar', amount: 1034 },
              { month: 'Avr', amount: 1289 },
              { month: 'Mai', amount: 1456 },
              { month: 'Juin', amount: 1247 }
            ].map((data, index) => (
              <div key={index} className="text-center">
                <div className="text-emerald-400 font-semibold text-lg">${data.amount}</div>
                <div className="text-gray-400 text-sm">{data.month}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}