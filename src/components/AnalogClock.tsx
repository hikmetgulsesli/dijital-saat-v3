import './AnalogClock.css'

interface AnalogClockProps {
  time: Date
}

export function AnalogClock({ time }: AnalogClockProps) {
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourRotation = (hours % 12) * 30 + minutes * 0.5
  const minuteRotation = minutes * 6 + seconds * 0.1
  const secondRotation = seconds * 6

  return (
    <div className="analog-clock" data-testid="analog-clock">
      <div className="clock-container">
        <svg viewBox="0 0 400 400" className="clock-svg">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="0.5" className="clock-ring" />
          <g className="clock-ticks">
            <line x1="370" y1="200" x2="385" y2="200" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="200" x2="15" y2="200" stroke="currentColor" strokeWidth="2" />
            <line x1="200" y1="370" x2="200" y2="385" stroke="currentColor" strokeWidth="2" />
            <line x1="200" y1="30" x2="200" y2="15" stroke="currentColor" strokeWidth="2" />
            {[30, 60, 120, 150, 210, 240, 300, 330].map((angle) => (
              <line key={angle} x1="285" y1="52.6" x2="292.5" y2="39.6" stroke="currentColor" strokeWidth="1" transform={`rotate(${angle} 200 200)`} />
            ))}
          </g>
          <line x1="200" y1="200" x2="280" y2="200" stroke="currentColor" strokeLinecap="round" strokeWidth="6" transform={`rotate(${hourRotation} 200 200)`} className="hour-hand" />
          <line x1="200" y1="200" x2="330" y2="200" stroke="currentColor" strokeLinecap="round" strokeWidth="4" transform={`rotate(${minuteRotation} 200 200)`} className="minute-hand" />
          <g transform={`rotate(${secondRotation} 200 200)`}>
            <line x1="200" y1="200" x2="355" y2="200" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" className="second-hand" />
            <circle cx="200" cy="200" r="4" fill="currentColor" className="second-hand" />
            <line x1="200" y1="200" x2="160" y2="200" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" className="second-hand" />
          </g>
          <circle cx="200" cy="200" r="6" fill="currentColor" className="center-dot" />
        </svg>
        <div className="digital-overlay">
          <span className="digital-time">{time.toLocaleTimeString('tr-TR', { hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  )
}
