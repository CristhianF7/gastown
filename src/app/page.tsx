import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '32px' }}>
      <h1>Welcome to Civo</h1>
      <Link href="/dashboard" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
        Go to Dashboard
      </Link>
    </main>
  )
}
