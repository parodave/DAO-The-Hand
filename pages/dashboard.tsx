import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'
import { supabase } from '../lib/supabaseClient'
import { motion } from 'framer-motion'

const mockBalances = [
  { token: 'ETH', balance: '1.23' },
  { token: 'DAI', balance: '2500' }
]

export default function Dashboard() {
  const router = useRouter()
  const { address } = useAccount()

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getSession()
      if (!address && !data.session) {
        router.replace('/login')
      }
    }
    check()
  }, [address, router])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      {address && <p>Wallet: {address}</p>}
      <h2>Token Balances</h2>
      <ul>
        {mockBalances.map((b) => (
          <li key={b.token}>{b.token}: {b.balance}</li>
        ))}
      </ul>
      <h2>Votes & Revenue</h2>
      <p>Coming soon...</p>
    </motion.div>
  )
}
