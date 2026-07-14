# Donzo Dashboard

React + Vite recreation of the Donzo dashboard UI, extended with an OTP verification screen, Pending Requests, Admin Panel, and an APIs page — same sidebar, color palette (green/white), and card-based layout as the original.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Pages / routes

| Route                | Page                          |
|-----------------------|--------------------------------|
| `/`                   | Dashboard (matches the reference screenshot) |
| `/pending-requests`   | Pending Requests — approve/reject table |
| `/admin`              | Admin Panel — users & roles |
| `/apis`               | APIs — keys & endpoints |
| `/verify-otp`         | Standalone OTP verification screen (no sidebar) |
| `/transactions`, `/calendar`, `/analytics`, `/settings` | Placeholder pages, wired into the sidebar and ready to build out |

## Structure

```
src/
  components/
    Sidebar.jsx      — left nav, active-state highlighting
    Topbar.jsx        — search bar + notification + user chip
    Layout.jsx         — wraps pages in Sidebar + Topbar
    StatCard.jsx       — reusable stat card (used on Dashboard)
  pages/
    Dashboard.jsx
    PendingRequests.jsx
    AdminPanel.jsx
    ApisPage.jsx
    OtpVerification.jsx
    Placeholder.jsx
  index.css           — design tokens (colors, radius, shadows) + all component styles
```

## Design tokens

Colors, radii, and shadows are defined as CSS variables at the top of `src/index.css` — change them there to retheme the whole app in one place. Primary green is `--green-500` (`#34b256`).

## Notes

- Icons are from `lucide-react`.
- Routing is `react-router-dom` (v6).
- No backend — all data in the pages is mock/sample data, ready to be swapped for real API calls.
