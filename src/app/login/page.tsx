'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Wallet, Mail, Phone, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'wallet' | 'email' | 'phone'>('wallet');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-black to-gray-900/20" />
      
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
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

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => router.push('/')}
            className="absolute top-0 left-0 flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-2">
            Connexion DAO
          </h1>
          <p className="text-gray-400">Accédez à votre dashboard</p>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-emerald-500/20"
        >
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-800/50 rounded-lg p-1">
            {[
              { id: 'wallet', label: 'Wallet', icon: Wallet },
              { id: 'email', label: 'Email', icon: Mail },
              { id: 'phone', label: 'Téléphone', icon: Phone }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center py-2 px-3 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Wallet Connection */}
            {activeTab === 'wallet' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all"
                >
                  <Wallet className="w-5 h-5 mr-3" />
                  Connecter MetaMask
                </button>
                
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all"
                >
                  <Wallet className="w-5 h-5 mr-3" />
                  WalletConnect
                </button>
              </motion.div>
            )}

            {/* Email Login */}
            {activeTab === 'email' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white pr-12"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phone Login */}
            {activeTab === 'phone' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-emerald-500 focus:outline-none text-white"
                    placeholder="+33 6 12 34 56 78"
                    required
                  />
                </div>
                
                <button
                  type="button"
                  className="w-full py-3 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Envoyer le code SMS
                </button>
              </motion.div>
            )}

            {/* Submit Button */}
            {activeTab !== 'phone' && (
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all transform hover:scale-105"
              >
                Se connecter
              </button>
            )}
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Pas encore membre ?{' '}
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Rejoindre la DAO
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}