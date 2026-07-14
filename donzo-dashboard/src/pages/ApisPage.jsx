import { Plus, Copy } from 'lucide-react'

const keys = [
  ,
  
]

const endpoints = [
  
]

const methodClass = { GET: 'method-get', POST: 'method-post', DELETE: 'method-delete' }

export default function ApisPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">APIs</h1>
          <p className="page-subtitle">Manage keys and explore available endpoints.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary"><Plus size={16} /> Generate Key</button>
        </div>
      </div>

      <div className="grid grid-2col">
        <div className="card">
          <h3 className="card-title">Endpoints</h3>
          <div>
            {endpoints.map((e) => (
              <div className="endpoint-row" key={e.path + e.method}>
                <span className={'method-tag ' + methodClass[e.method]}>{e.method}</span>
                <span className="endpoint-path">{e.path}</span>
                <span style={{ color: 'var(--ink-faint)', marginLeft: 'auto', fontSize: 13 }}>{e.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">API Keys</h3>
          {keys.map((k) => (
            <div className="api-key-row" key={k.name}>
              <div>
                <div className="api-key-name">{k.name}</div>
                <span className="api-key-value">{k.value}</span>
              </div>
              <button className="icon-btn" aria-label="Copy key">
                <Copy size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
