import { useState, useEffect } from 'react'
import { AnalogClock, Settings, type ClockType } from './components'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  const [clockType, setClockType] = useState<ClockType>('digital')
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour12: false })
  }

  const formatWeekday = (date: Date) => {
    return date.toLocaleDateString('tr-TR', { weekday: 'long' })
  }

  if (showSettings) {
    return (
      <Settings 
        clockType={clockType} 
        onClockTypeChange={(type) => {
          setClockType(type)
          setShowSettings(false)
        }} 
      />
    )
  }

  return (
    <div className="app">
      {/* TopNavBar */}
      <header className="top-nav">
        <nav className="nav-content">
          <div className="logo">MIDNIGHT</div>
          <button 
            className="settings-button"
            onClick={() => setShowSettings(true)}
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Background Ambient Glow */}
        <div className="ambient-glow">
          <div className="glow-top"></div>
          <div className="glow-bottom"></div>
        </div>

        {/* Clock Stage */}
        <section className="clock-stage">
          {clockType === 'analog' ? (
            <AnalogClock time={time} />
          ) : (
            <div className="digital-view">
              <div className="digital-time">{formatTime(time)}</div>
            </div>
          )}
          
          {/* Date Display */}
          <div className="date-display">
            <h2 className="date-text">{formatDate(time)}</h2>
            <p className="weekday-text">{formatWeekday(time)}</p>
          </div>
        </section>

        {/* World Time Bento Fragment */}
        <section className="world-time-section">
          <div className="world-time-card">
            <div>
              <p className="city-label">Londra</p>
              <p className="city-time">
                {new Date(time.getTime() - 3 * 60 * 60 * 1000).toLocaleTimeString('tr-TR', { 
                  hour12: false, 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            <span className="material-symbols-outlined world-icon">public</span>
          </div>
          <div className="world-time-card">
            <div>
              <p className="city-label">New York</p>
              <p className="city-time">
                {new Date(time.getTime() - 8 * 60 * 60 * 1000).toLocaleTimeString('tr-TR', { 
                  hour12: false, 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            <span className="material-symbols-outlined world-icon">public</span>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${clockType === 'digital' ? 'active' : ''}`}
          onClick={() => setClockType('digital')}
        >
          <span className="material-symbols-outlined">schedule</span>
          <span className="nav-label">Dijital</span>
        </button>
        <button 
          className={`nav-item ${clockType === 'analog' ? 'active' : ''}`}
          onClick={() => setClockType('analog')}
        >
          <span className="material-symbols-outlined">watch_later</span>
          <span className="nav-label">Analog</span>
        </button>
      </nav>
    </div>
  )
}

export default App
