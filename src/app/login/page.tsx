export default function LoginPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Login</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <input
          type="email"
          placeholder="Email"
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Login
        </button>
      </form>
    </main>
  )
}
