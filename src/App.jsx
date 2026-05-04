import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <span className="logo">keymate.ai</span>
        <nav className="nav" aria-label="Primary">
          <a href="#product">Product</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="product">
          <p className="eyebrow">React · HTML · CSS</p>
          <h1 className="hero-title">Build with Keymate</h1>
          <p className="hero-lede">
            Front end is ready for GitHub Pages. Run <code>npm install</code>, then{' '}
            <code>npm run dev</code> locally, or push to <code>main</code> to deploy via
            Actions.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://github.com">
              View on GitHub
            </a>
            <a className="btn btn-ghost" href="#about">
              Learn more
            </a>
          </div>
        </section>

        <section className="panel" id="about">
          <h2>Hosting</h2>
          <p>
            Set <code>VITE_BASE_PATH</code> in the GitHub Actions workflow to match your
            repository name if you use project pages (for example <code>/Keymate/</code>).
            Use <code>/</code> for a custom domain or a <code>username.github.io</code>{' '}
            user site.
          </p>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} keymate.ai</small>
      </footer>
    </div>
  )
}

export default App
