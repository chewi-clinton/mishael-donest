import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import OtpVerification from './pages/OtpVerification.jsx'
import PendingRequests from './pages/PendingRequests.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import ApisPage from './pages/ApisPage.jsx'
import Placeholder from './pages/Placeholder.jsx'

export default function App() {
  return (
    <Routes>
      
      <Route path="/verify-otp" element={<OtpVerification />} />

      
      <Route path="/" element={<Layout><Dashboard /></Layout>} />
      <Route path="/pending-requests" element={<Layout><PendingRequests /></Layout>} />
      <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />
      <Route path="/apis" element={<Layout><ApisPage /></Layout>} />
      <Route path="/transactions" element={<Layout><Placeholder title="Transactions" /></Layout>} />
      <Route path="/calendar" element={<Layout><Placeholder title="Calendar" /></Layout>} />
      <Route path="/analytics" element={<Layout><Placeholder title="Analytics" /></Layout>} />
      <Route path="/settings" element={<Layout><Placeholder title="Settings" /></Layout>} />
    </Routes>
  )
}
