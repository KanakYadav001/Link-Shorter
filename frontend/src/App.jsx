import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const shortUrl = shortenedLink

  const handleShortenLink = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL')
      return
    }

    setLoading(true)
    setError('')
    setShortenedLink('')
    setCopied(false)

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error('Failed to create shortened link')
      }

      const data = await response.json()
      setShortenedLink(data.link)
      setUrl('')
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleCopyToClipboard = () => {
    if (!shortUrl) {
      return
    }

    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleShortenLink()
    }
  }

  return (
    <div className="app-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="brand-lockup">
          <span className="brand-mark">MS</span>
          <div>
            <p className="brand-name">MakeShort</p>
            <p className="brand-tag">Smooth link shortener</p>
          </div>
        </div>

        <div className="topbar-badge">Fast, clean, sharable</div>
      </header>

      <main className="main-content">
        <section className="hero-copy">
          <p className="eyebrow">Link cleaner</p>
          <h1>Turn messy URLs into something sharp.</h1>
          <p className="subtitle">
            Paste a long link, generate a short version, and copy it with one smooth move.
          </p>

          <div className="feature-row">
            <span>Instant shortening</span>
            <span>One-click copy</span>
            <span>Built for sharing</span>
          </div>
        </section>

        <section className="studio-card" aria-label="URL shortener form">
          <div className="card-header">
            <div>
              <p className="card-kicker">Shorten a link</p>
              <h2>Paste the URL and hit go.</h2>
            </div>
            <span className="card-chip">Live</span>
          </div>

          <div className="input-stack">
            <label className="input-label" htmlFor="long-url">
              Long URL
            </label>
            <div className="input-group">
              <input
                id="long-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="https://your-site.com/very/long/link"
                className="url-input"
                disabled={loading}
              />
              <button onClick={handleShortenLink} className="get-link-btn" disabled={loading}>
                {loading ? 'Creating...' : 'Shorten'}
              </button>
            </div>
            <p className="helper-text">Press Enter to shorten faster.</p>
          </div>

          {error && <p className="error-message">{error}</p>}

          {shortenedLink && (
            <div className="result-container">
              <p className="result-label">Your short link</p>
              <div className="result-box">
                <div className="result-copy">
                  <p className="shortened-link">{shortUrl}</p>
                  <p className="result-note">Ready to paste anywhere.</p>
                </div>
                <button onClick={handleCopyToClipboard} className="copy-btn">
                  {copied ? 'Copied' : 'Copy link'}
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Fast link cleanup for sharing, demos, and everything in between.</p>
          <div className="footer-badges">
            <span>Minimal</span>
            <span>Responsive</span>
            <span>Clean UX</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
