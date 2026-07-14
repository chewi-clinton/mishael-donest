export default function Placeholder({ title }) {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">This page is a placeholder — build it out the same way as Dashboard.</p>
        </div>
      </div>
      <div className="card">
        <p style={{ color: 'var(--ink-faint)', margin: 0 }}>No content here yet.</p>
      </div>
    </>
  )
}
