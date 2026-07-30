import { APP_URL, Nav, SiteFooter } from "./Layout"

const PRINCIPLES = [
  { shape: "circle-fill", label: "Local-first storage" },
  { shape: "square-fill", label: "Peer-to-peer sync" },
  { shape: "circle-outline", label: "End-to-end encrypted" },
  { shape: "square-outline", label: "Offline-ready" },
]

const FEATURES = [
  {
    n: "01",
    title: "Formats as you write",
    body: "Headings, lists, checkboxes, and styling show up exactly as they'll look — no markup to learn and no preview mode to flip between.",
  },
  {
    n: "02",
    title: "Real-time, peer-to-peer",
    body: "Collaborators connect directly to each other. Cursors, selections, and edits appear the instant they happen — no relay server in between.",
  },
  {
    n: "03",
    title: "Nothing gets lost",
    body: "When two people type in the same spot at once, every change is kept and blended together automatically — no overwrites, no lost work.",
  },
  {
    n: "04",
    title: "Works fully offline",
    body: "Keep writing on a plane or a dead connection. Notes are stored locally and sync the moment a peer comes back online.",
  },
  {
    n: "05",
    title: "Private by default",
    body: "Data channels are encrypted end-to-end. The signaling server only helps peers find each other — it never sees your content.",
  },
  {
    n: "06",
    title: "Notebooks & folders",
    body: "Organize notes into nested notebooks and folders. Create, rename, and rearrange — the structure syncs along with the content.",
  },
]

const HOW_STEPS = [
  {
    n: "1",
    title: "Write locally",
    body: "Every note is saved to your device in the browser. It's yours instantly — online or off.",
  },
  {
    n: "2",
    title: "Peers connect directly",
    body: "Share a notebook and devices link over encrypted WebRTC. A signaling server only introduces them.",
  },
  {
    n: "3",
    title: "Everyone stays in sync",
    body: "Changes from everyone are blended together automatically, so each device ends up with the exact same note.",
  },
]

export default function App() {
  return (
    <div className="page">
      <Nav page="home" />

      <HeroSection />

      <PrinciplesStrip />

      <FeaturesSection />

      <HowItWorksSection />

      <CtaBanner />

      <SiteFooter />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero">
      <RippleField />
      <div className="hero-content">
        <div className="eyebrow">
          <DropIcon />
          Local-first collaborative notes
        </div>
        <h1>
          Write together,<br />
          <em>in sync</em>
        </h1>
        <p className="subtitle">
          A real-time collaborative note editor that lives in your browser.
          Edits sync directly between devices — no servers in the middle,
          no accounts, no copies of your work on anyone else's computer.
        </p>
        <div className="cta-row">
          <a href={APP_URL} className="btn-primary">
            Start writing <span className="arrow">→</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>No install</span>
          <span className="meta-dot">·</span>
          <span>No sign-up</span>
          <span className="meta-dot">·</span>
          <span>Works offline</span>
        </div>
      </div>
    </section>
  )
}

function PrinciplesStrip() {
  return (
    <div className="principles-strip">
      {PRINCIPLES.map(({ shape, label }) => (
        <div key={label} className="principle-item">
          <PrincipleDot shape={shape} />
          {label}
        </div>
      ))}
    </div>
  )
}

function PrincipleDot({ shape }: { shape: string }) {
  const base: React.CSSProperties = { width: 9, height: 9, flex: "none", background: "var(--accent)" }
  if (shape === "circle-fill") return <span style={{ ...base, borderRadius: "50%" }} />
  if (shape === "square-fill") return <span style={{ ...base, borderRadius: 2 }} />
  if (shape === "circle-outline") return <span style={{ ...base, background: "transparent", border: "2px solid var(--accent)", borderRadius: "50%" }} />
  return <span style={{ ...base, background: "transparent", border: "2px solid var(--accent)", borderRadius: 2 }} />
}

function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="section-wrap">
        <div className="section-eyebrow">What makes it different</div>
        <h2 className="section-title">
          A real editor. With none of the strings<br />the cloud attaches.
        </h2>
        <p className="section-subtitle">
          Everything you'd expect from a modern writing tool, built on a foundation
          that keeps the data — and the control — on your side.
        </p>
        <div className="features-grid">
          {FEATURES.map(({ n, title, body }) => (
            <div key={n} className="feature-card">
              <div className="feature-num">{n}</div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how" className="how-section">
      <div className="section-wrap how-inner">
        <div className="how-text">
          <div className="section-eyebrow">How sync works</div>
          <h2 className="section-title">No server ever holds your document.</h2>
          <div className="how-steps">
            {HOW_STEPS.map(({ n, title, body }) => (
              <div key={n} className="how-step">
                <div className="step-num">{n}</div>
                <div>
                  <h3 className="step-title">{title}</h3>
                  <p className="step-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="how-diagram">
          <P2PDiagram />
        </div>
      </div>
    </section>
  )
}

function P2PDiagram() {
  return (
    <svg viewBox="0 0 360 320" width="100%" style={{ maxWidth: 400 }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="180" y1="70" x2="78" y2="250" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5" />
      <line x1="180" y1="70" x2="282" y2="250" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5" />
      <line x1="78" y1="250" x2="282" y2="250" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5" />
      <g>
        <rect x="146" y="40" width="68" height="60" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
        <rect x="158" y="54" width="44" height="5" rx="2.5" fill="var(--muted)" />
        <rect x="158" y="65" width="34" height="5" rx="2.5" fill="var(--surface2)" />
        <rect x="158" y="76" width="40" height="5" rx="2.5" fill="var(--surface2)" />
      </g>
      <g>
        <rect x="44" y="220" width="68" height="60" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
        <rect x="56" y="234" width="44" height="5" rx="2.5" fill="var(--muted)" />
        <rect x="56" y="245" width="34" height="5" rx="2.5" fill="var(--surface2)" />
        <rect x="56" y="256" width="40" height="5" rx="2.5" fill="var(--surface2)" />
      </g>
      <g>
        <rect x="248" y="220" width="68" height="60" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
        <rect x="260" y="234" width="44" height="5" rx="2.5" fill="var(--muted)" />
        <rect x="260" y="245" width="34" height="5" rx="2.5" fill="var(--surface2)" />
        <rect x="260" y="256" width="40" height="5" rx="2.5" fill="var(--surface2)" />
      </g>
      <circle cx="180" cy="70" r="5" fill="var(--accent)" />
      <circle cx="78" cy="250" r="5" fill="var(--accent)" />
      <circle cx="282" cy="250" r="5" fill="var(--accent)" />
      <text x="180" y="165" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="var(--muted)" letterSpacing="1">direct · p2p</text>
    </svg>
  )
}

function CtaBanner() {
  return (
    <section className="cta-banner-wrap">
      <div className="section-wrap">
        <div className="cta-banner">
          <h2 className="cta-banner-title">Your next note doesn't<br />need a server.</h2>
          <p className="cta-banner-sub">
            Open Synk in your browser and start writing. Invite someone, and you're collaborating in seconds.
          </p>
          <a href={APP_URL} className="btn-primary btn-primary--dark">
            Open Synk <span className="arrow">→</span>
          </a>
          <div className="cta-banner-meta">Free · no sign-up · runs in your browser</div>
        </div>
      </div>
    </section>
  )
}

function RippleField() {
  return (
    <svg className="ripple-field" viewBox="-100 -50 1600 800" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g fill="none" stroke="var(--ripple)" strokeWidth="1.5">
        <ellipse cx="700" cy="350" rx="160" ry="55" opacity=".18" />
        <ellipse cx="700" cy="350" rx="280" ry="95" opacity=".12" />
        <ellipse cx="700" cy="350" rx="420" ry="143" opacity=".08" />
        <ellipse cx="700" cy="350" rx="580" ry="197" opacity=".05" />
        <ellipse cx="700" cy="350" rx="700" ry="238" opacity=".03" />
      </g>
    </svg>
  )
}

function DropIcon() {
  return (
    <svg width="11" height="14" viewBox="0 0 64 80" aria-hidden="true">
      <path d="M32 4 C 33 26 48 38 48 52 a 16 16 0 1 1 -32 0 C 16 38 31 26 32 4 z" fill="var(--accent)" />
    </svg>
  )
}
