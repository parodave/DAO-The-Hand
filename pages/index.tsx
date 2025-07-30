import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>DAO Dashboard Demo</h1>
      <Link href="/login">Go to Login</Link>
    </main>
  )
}
