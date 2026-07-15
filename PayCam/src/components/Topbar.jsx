import { Search, Bell } from 'lucide-react'

export default function Topbar({ user = { name: 'Chewi Clinton', email: 'chewinwi@email.com' } }) {
  const initials = user.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className="topbar">
      <div className="search-input">
        <Search size={16} />
        <input placeholder="Search task" />
      </div>

      <div className="topbar-right">
        <button className="icon-btn" aria-label="Notifications">
          <Bell size={17} />
        </button>
        <div className="user-chip">
          <div className="user-avatar">{initials}</div>
          <div>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
