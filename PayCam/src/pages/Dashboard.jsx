import { Plus, Upload, Download } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'

const projects = [
  'SAas App',
  'Fintech app',
  'using your APIs',
  'Drevolo APP',
  'Chase Browser Extension',
]

const team = [
  { initials: 'Ch', name: 'Aisha Diall', status: 'Completed' },
  { initials: 'EA', name: 'Edwin Adenike', task: 'Reviewing pull request', status: 'Pending' },
]

const barHeights = [40, 55, 100, 60, 70, 45, 50, 35]

export default function Dashboard() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">For easy Apis</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary"><Plus size={16} /></button>
          <button className="btn btn-secondary">Something here</button>
        </div>
      </div>

      <div className="grid grid-stats" style={{ marginBottom: 18 }}>
        <StatCard label="Total transactions" value="24" pillText="Increased from last month" featured />
        <StatCard label="Ended transactions" value="10" pillText="Increased from last month" />
        <StatCard label="Running transactions" value="12" pillText="Increased from last month" />
        <StatCard label="Pending transactions" value="2" pillText="On Discuss" pillTone="amber" />
      </div>

      <div className="grid grid-2col" style={{ marginBottom: 18 }}>
        <div className="card">
          <h3 className="card-title">Finance analysis</h3>
          <div className="bar-chart">
            {barHeights.map((h, i) => (
              <div key={i} className={'bar' + (i === 2 ? ' active' : '')} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

      </div>

      <div className="grid grid-2col">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 className="card-title" style={{ margin: 0 }}>Project</h3>
            <span className="badge-new">New</span>
          </div>
          <ul className="list">
            {projects.map((p) => (
              <li key={p} className="list-item">
                <span className="dot" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          
          <ul className="list">
            {team.map((t) => (
              <li key={t.name} className="list-item" style={{ justifyContent: 'space-between' }}>
                <span className="person-cell">
                  <span className="mini-avatar">{t.initials}</span>
                  <span>
                    <div style={{ fontWeight: 600 }}></div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-faint)' }}></div>
                  </span>
                </span>
                <span className={'status-tag ' + (t.status === 'Completed' ? 'status-completed' : 'status-pending')}>
                  {t.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
