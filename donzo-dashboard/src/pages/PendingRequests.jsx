import { Filter } from 'lucide-react'

const requests = [
  { initials: 'ADA', name: '', project: '', type: 'Budget Increase', date: 'Jul 12, 2026' },
  { initials: 'Clinton', name: '', project: '', type: 'Access Request', date: 'Jul 12, 2026'},
  { initials: 'TM', name: '', project: '', type: 'Deadline Extension', date: 'Jul 11, 2026' },
  { initials: 'FK', name: '', project: '', type: 'Budget Increase', date: 'Jul 10, 2026' },
  { initials: 'RS', name: '', project: '', type: 'Vendor Payment', date: 'Jul 9, 2026' },
]

export default function PendingRequests() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Pending Requests</h1>
          <p className="page-subtitle">Review and action requests waiting on your approval.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary"><Filter size={16} /> Filter</button>
        </div>
      </div>

      <div className="grid grid-stats" style={{ marginBottom: 18 }}>
        <div className="card card-featured">
          <div className="stat-top"><span className="stat-label">Awaiting Review</span></div>
          <div className="stat-value">{requests.length}</div>
          <span className="stat-pill">Needs attention</span>
        </div>
        <div className="card">
          <div className="stat-top"><span className="stat-label">Approved This Week</span></div>
          <div className="stat-value">18</div>
          <span className="stat-pill">Increased from last week</span>
        </div>
        <div className="card">
          <div className="stat-top"><span className="stat-label">Rejected This Week</span></div>
          <div className="stat-value">3</div>
          <span className="stat-pill amber">Review reasons</span>
        </div>
        <div className="card">
          <div className="stat-top"><span className="stat-label">Avg. Response Time</span></div>
          <div className="stat-value">6h</div>
          <span className="stat-pill">Faster than last week</span>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Requests</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Requested by</th>
                <th>Project</th>
                <th>Type</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.name + r.project}>
                  <td>
                    <span className="person-cell">
                      <span className="mini-avatar">{r.initials}</span>
                      {r.name}
                    </span>
                  </td>
                  <td>{r.project}</td>
                  <td>{r.type}</td>
                  <td>{r.date}</td>
                  <td>{r.amount}</td>
                  <td>
                    <span className="row-actions">
                      <button className="action-btn approve">Approve</button>
                      <button className="action-btn reject">Reject</button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
