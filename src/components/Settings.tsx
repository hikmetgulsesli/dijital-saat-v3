import './Settings.css'

export type ClockType = 'digital' | 'analog'

interface SettingsProps {
  clockType: ClockType
  onClockTypeChange: (type: ClockType) => void
}

export function Settings({ clockType, onClockTypeChange }: SettingsProps) {
  return (
    <div className="settings-page" data-testid="settings-page">
      {/* Header */}
      <header className="settings-header">
        <div className="header-left">
          <button className="back-button" aria-label="Geri">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h1 className="logo">MIDNIGHT</h1>
        </div>
        <button className="icon-button" aria-label="Ayarlar">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="settings-main">
        {/* Editorial Header */}
        <section className="editorial-header">
          <h2 className="editorial-title">Ayarlar</h2>
          <p className="editorial-subtitle">Zamanın nasıl görüneceğine sen karar ver.</p>
        </section>

        {/* Bento Grid Settings */}
        <div className="settings-grid">
          {/* Appearance Toggle Card */}
          <div className="settings-card">
            <div className="card-content">
              <div className="card-icon primary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="card-text">
                <h3 className="card-title">Analog/Dijital Görünüm</h3>
                <p className="card-description">Saat arayüzünü değiştirin</p>
              </div>
            </div>
            {/* Toggle Switch */}
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={clockType === 'analog'}
                onChange={(e) => onClockTypeChange(e.target.checked ? 'analog' : 'digital')}
                className="sr-only"
              />
              <div className="toggle-track">
                <div className="toggle-thumb"></div>
              </div>
            </label>
          </div>

          {/* Theme Info Card */}
          <div className="settings-card">
            <div className="card-content">
              <div className="card-icon tertiary">
                <span className="material-symbols-outlined">dark_mode</span>
              </div>
              <div className="card-text">
                <h3 className="card-title">Koyu Tema</h3>
                <p className="card-description">Sistem varsayılanı: Slate-950</p>
              </div>
            </div>
            <span className="badge">AKTİF</span>
          </div>

          {/* Data Storage Card */}
          <div className="settings-card">
            <div className="card-content">
              <div className="card-icon secondary">
                <span className="material-symbols-outlined">database</span>
              </div>
              <div className="card-text">
                <h3 className="card-title">Yerel Depolama</h3>
                <p className="card-description">Ayarları localStorage'da sakla</p>
              </div>
            </div>
            <button className="save-button">KAYDET</button>
          </div>
        </div>

        {/* Footer Action */}
        <div className="settings-footer">
          <button className="reset-button">
            <span className="material-symbols-outlined">refresh</span>
            Varsayılan Ayarlara Dön
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${clockType === 'digital' ? 'active' : ''}`}
          onClick={() => onClockTypeChange('digital')}
        >
          <span className="material-symbols-outlined">schedule</span>
          <span className="nav-label">Dijital</span>
        </button>
        <button 
          className={`nav-item ${clockType === 'analog' ? 'active' : ''}`}
          onClick={() => onClockTypeChange('analog')}
        >
          <span className="material-symbols-outlined">watch_later</span>
          <span className="nav-label">Analog</span>
        </button>
      </nav>
    </div>
  )
}

export default Settings
