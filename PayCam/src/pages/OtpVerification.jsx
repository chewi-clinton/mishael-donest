import { useRef, useState, useEffect } from 'react'
import { ShieldCheck } from 'lucide-react'

const LENGTH = 4

export default function OtpVerification() {
  const [values, setValues] = useState(Array(LENGTH).fill(''))
  const [seconds, setSeconds] = useState(45)
  const inputsRef = useRef([])

  useEffect(() => {
    if (seconds <= 0) return
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  const handleChange = (i, val) => {
    if (!/^[0-9]?$/.test(val)) return
    const next = [...values]
    next[i] = val
    setValues(next)
    if (val && i < LENGTH - 1) inputsRef.current[i + 1]?.focus()
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !values[i] && i > 0) {
      inputsRef.current[i - 1]?.focus()
    }
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-icon">
          <ShieldCheck size={26} />
        </div>
        <h1 className="auth-title">Verify your identity</h1>
        <p className="auth-subtitle">
          Enter the 4-digit code we sent to <b>tobinmichael@email.com</b>
        </p>

        <div className="otp-row">
          {values.map((v, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              className="otp-box"
              inputMode="numeric"
              maxLength={1}
              value={v}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
            />
          ))}
        </div>

        <div className="auth-timer">
          {seconds > 0 ? (
            <>Code expires in 00:{String(seconds).padStart(2, '0')}</>
          ) : (
            <button onClick={() => setSeconds(45)}>Resend code</button>
          )}
        </div>

        <button className="btn btn-primary btn-block">Verify & Continue</button>
      </div>
    </div>
  )
}
