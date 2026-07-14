import { UserPlus } from 'lucide-react'

const users = [
  { initials: 'AD', name: 'Chewi Clinton', email: 'clin@plas', role: 'Admin', status: 'Completed' },
  { initials: 'EA', name: 'Chewi Clinton', email: 'edwin@dsjkds', role: 'Dev', status: 'Pending' },
  { initials: 'TM', name: 'Chewi Clinton', email: 'hell yrats', role: 'buyer', status: 'Completed' },
  { initials: 'FK', name: 'Chewi Clinton', email: 'farah@donzo.com', role: 'User', status: 'Completed' },
  { initials: 'RS', name: 'me', email: 'ravi@donzo.io', role: 'Editor', status: 'Rejected' },
]

export default function AdminPanel() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Admin Panel</h1>
          <p className="page-subtitle">Manage users, roles, and platform-wide settings.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary"><UserPlus size={16} /> Invite User</button>
        </div>
      </div>

      <div className="grid grid-admin-stats" style={{ marginBottom: 18 }}>
        <div className="card card-featured">
          <div className="stat-top"><span className="stat-label">Total Users</span></div>
          <div className="stat-value">128</div>
          <span className="stat-pill">+9 this month</span>
        </div>
        <div className="card">
          <div className="stat-top"><span className="stat-label">Active Sessions</span></div>
          <div className="stat-value">37</div>
          <span className="stat-pill">Live now</span>
        </div>
        <div className="card">
          <div className="stat-top"><span className="stat-label">Flagged Accounts</span></div>
          <div className="stat-value">2</div>
          <span className="stat-pill amber">Needs review</span>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Users &amp; Roles</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email}>
                  <td>
                    <span className="person-cell">
                      <span className="mini-avatar">{u.initials}</span>
                      {u.name}
                    </span>
                  </td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <span className={'status-tag ' + (
                      u.status === 'Completed' ? 'status-completed' :
                      u.status === 'Pending' ? 'status-pending' : 'status-rejected'
                    )}>
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <span className="row-actions">
                      <button className="action-btn">Edit</button>
                      <button className="action-btn reject">Remove</button>
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
