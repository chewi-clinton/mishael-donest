import { ArrowUpRight } from 'lucide-react'

export default function StatCard({ label, value, pillText, pillTone = 'green', featured = false }) {
  return (
    <div className={'card' + (featured ? ' card-featured' : '')}>
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        <ArrowUpRight size={16} />
      </div>
      <div className="stat-value">{value}</div>
      <span className={'stat-pill' + (pillTone === 'amber' ? ' amber' : '')}>{pillText}</span>
    </div>
  )
}
