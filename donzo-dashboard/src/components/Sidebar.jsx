import { NavLink } from 'react-router-dom'
import {
  LayoutGrid,
  CheckSquare,
  Calendar,
  BarChart2,
  Code2,
  Settings,
  LogOut,
  Clock3,
  ShieldCheck,
} from 'lucide-react'

const menuItems = [
  { to: '/', label: 'Finance', icon: LayoutGrid },
  { to: '/pending-requests', label: 'Pending Requests', icon: Clock3 },
  { to: '/transactions', label: 'Transactions', icon: CheckSquare },
  { to: '/calendar', label: 'Calendar', icon: Calendar },
  { to: '/analytics', label: 'Analytics', icon: BarChart2 },
  { to: '/apis', label: 'APIs', icon: Code2 },
  { to: '/admin', label: 'Admin Panel', icon: ShieldCheck },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark">M</div>
        <div className="sidebar-brand-name">Mishael</div>
      </div>

      <div>
        <div className="sidebar-section-label">Menu</div>
        <nav className="sidebar-nav">
          {menuItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
            >
              <Icon />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-section-label">General</div>
        <NavLink to="/settings" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
          <Settings />
          Settings
        </NavLink>
        <a href="#" className="sidebar-link">
          <LogOut />
          Logout
        </a>
      </div>
    </aside>
  )
}
