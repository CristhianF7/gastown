type MetricCardProps = {
  title: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
}

function MetricCard({ title, value, change, trend }: MetricCardProps) {
  const trendColor = trend === 'up' ? '#22c55e' : trend === 'down' ? '#ef4444' : '#6b7280'

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: 500,
        color: '#6b7280'
      }}>
        {title}
      </h3>
      <div style={{
        fontSize: '32px',
        fontWeight: 700,
        color: '#111827',
        marginBottom: '4px'
      }}>
        {value}
      </div>
      {change && (
        <div style={{ fontSize: '14px', color: trendColor }}>
          {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {change}
        </div>
      )}
    </div>
  )
}

type ReportRowProps = {
  label: string
  value: string | number
  percentage?: number
}

function ReportRow({ label, value, percentage }: ReportRowProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <span style={{ color: '#374151' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontWeight: 600, color: '#111827' }}>{value}</span>
        {percentage !== undefined && (
          <div style={{
            width: '100px',
            height: '8px',
            backgroundColor: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${percentage}%`,
              height: '100%',
              backgroundColor: '#3b82f6',
              borderRadius: '4px'
            }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '32px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#111827',
          marginBottom: '32px'
        }}>
          Dashboard
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <MetricCard
            title="Total Users"
            value="12,847"
            change="12% from last month"
            trend="up"
          />
          <MetricCard
            title="Active Sessions"
            value="1,234"
            change="3% from yesterday"
            trend="up"
          />
          <MetricCard
            title="Revenue"
            value="$48,352"
            change="8% from last month"
            trend="up"
          />
          <MetricCard
            title="Bounce Rate"
            value="24.5%"
            change="2% from last week"
            trend="down"
          />
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#111827',
            marginTop: 0,
            marginBottom: '16px'
          }}>
            Report Summary
          </h2>

          <ReportRow label="Page Views" value="45,678" percentage={85} />
          <ReportRow label="Unique Visitors" value="12,847" percentage={62} />
          <ReportRow label="Avg. Session Duration" value="4m 32s" percentage={45} />
          <ReportRow label="Conversion Rate" value="3.2%" percentage={32} />
          <ReportRow label="New Signups" value="847" percentage={28} />
        </div>
      </div>
    </main>
  )
}
