export const APP_URL = "https://app.synk.md"
export const GITHUB_URL = "https://github.com/synk-md/synk"

export function Nav({ page = "home" }: { page?: "home" | "roadmap" }) {
  return (
    <header className="site-header">
      <nav className="nav-inner">
        <a href="/" className="brand">
          <img src="/logo.svg" alt="Synk logo" />
          <span className="brand-name">Synk</span>
        </a>
        <div className="nav-links">
          <a href="/roadmap/" className={`nav-link${page === "roadmap" ? " nav-link--active" : ""}`}>Roadmap</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener" className="nav-link">GitHub</a>
        </div>
        <a href={APP_URL} className="nav-cta">
          Open app <span className="arrow">→</span>
        </a>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <img src="/logo.svg" alt="Synk logo" />
            <span className="brand-name">Synk</span>
          </div>
          <blockquote className="footer-tagline">
            <p>&ldquo;People need new tools to work with rather than new tools that work for them.&rdquo;</p>
            <footer className="footer-quote-cite">&mdash; Ivan Illich, <cite>Tools for Conviviality</cite></footer>
          </blockquote>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-head">Product</div>
            <a href="/roadmap/" className="footer-link">Roadmap</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap footer-bottom-inner">
          <span>© {new Date().getFullYear()} Synk</span>
        </div>
      </div>
    </footer>
  )
}
