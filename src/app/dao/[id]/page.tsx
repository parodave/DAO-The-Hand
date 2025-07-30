'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Users, TrendingUp, Target, Coins } from 'lucide-react';
import { useEffect, useState } from 'react';

interface EnterpriseData {
  id: number;
  name: string;
  description: string;
  goals: string[];
  stats: {
    members: number;
    tokensRemaining: number;
    monthlyRevenue: number;
    votesActive: number;
  };
  progress: number;
}

const mockEnterprises: Record<string, EnterpriseData> = {
  '1': {
    id: 1,
    name: 'TechDAO',
    description: 'Innovation technologique et développement d\'applications décentralisées',
    goals: ['Développer 3 DApps', 'Recruter 20 développeurs', 'Générer 50k$ de revenus'],
    stats: { members: 45, tokensRemaining: 54, monthlyRevenue: 12500, votesActive: 3 },
    progress: 65
  },
  '2': {
    id: 2,
    name: 'RealEstateDAO',
    description: 'Investissement immobilier tokenisé et gestion de propriétés',
    goals: ['Acquérir 5 propriétés', 'Tokeniser les actifs', 'ROI de 12% annuel'],
    stats: { members: 32, tokensRemaining: 67, monthlyRevenue: 8900, votesActive: 2 },
    progress: 45
  },
  '3': {
    id: 3,
    name: 'EcommerceDAO',
    description: 'Plateforme e-commerce communautaire et marketplace décentralisée',
    goals: ['Lancer la marketplace', '1000 vendeurs actifs', '100k$ de volume mensuel'],
    stats: { members: 28, tokensRemaining: 71, monthlyRevenue: 15200, votesActive: 4 },
    progress: 78
  },
  '4': {
    id: 4,
    name: 'BrandingDAO',
    description: 'Services de branding et marketing pour projets Web3',
    goals: ['50 clients Web3', 'Équipe créative de 15', 'Revenus récurrents 30k$'],
    stats: { members: 38, tokensRemaining: 61, monthlyRevenue: 9800, votesActive: 1 },
    progress: 52
  },
  '5': {
    id: 5,
    name: 'Web3DAO',
    description: 'Développement d\'infrastructure blockchain et DeFi',
    goals: ['Protocole DeFi', 'TVL de 1M$', 'Partenariats stratégiques'],
    stats: { members: 41, tokensRemaining: 58, monthlyRevenue: 18700, votesActive: 5 },
    progress: 73
  }
};

export default function DAOPage() {
  const params = useParams();
  const router = useRouter();
  const [enterprise, setEnterprise] = useState<EnterpriseData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params?.id as string;
    if (id && mockEnterprises[id]) {
      setTimeout(() => {
        setEnterprise(mockEnterprises[id]);
        setLoading(false);
      }, 800);
    } else {
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!enterprise) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">DAO Non Trouvée</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-gray-900/20" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            {enterprise.name}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-300 max-w-3xl">
            {enterprise.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <Users className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{enterprise.stats.members}</div>
            <div className="text-gray-400 text-sm">Membres Actifs</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <Coins className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{enterprise.stats.tokensRemaining}</div>
            <div className="text-gray-400 text-sm">Tokens Disponibles</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">${enterprise.stats.monthlyRevenue.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Revenus Mensuels</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
            <Target className="w-8 h-8 text-emerald-400 mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{enterprise.stats.votesActive}</div>
            <div className="text-gray-400 text-sm">Votes Actifs</div>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-emerald-500/20 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Progression des Objectifs</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Progression Globale</span>
              <span className="text-emerald-400 font-semibold">{enterprise.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${enterprise.progress}%` }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {enterprise.goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4" />
                <span className="text-gray-300">{goal}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <button className="px-12 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Rejoindre cette DAO - $999
          </button>
          <p className="text-gray-400 text-sm mt-4">
            1 Token = 1 Part Sociale + 1 Droit de Vote
          </p>
        </motion.div>
      </div>
    </div>
  );
}