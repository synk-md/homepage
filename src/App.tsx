import { APP_URL, GITHUB_URL, Nav, SiteFooter } from "./Layout"

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav page="home" />
      <main id="main">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title">Your notes,<br />on your device.</h1>
          </div>
          <div className="hero-intro">
            <p className="hero-lead">A place for real-time collaboration.</p>
            <div className="cta-row">
              <a href={APP_URL} className="btn-primary">Start writing <span aria-hidden="true">→</span></a>
              <span className="hero-meta">Free to use. No account required.</span>
            </div>
          </div>
        </section>

        <section id="features" className="product-section section-wrap" aria-label="Inside the editor">
          <figure className="product-figure">
            <video className="product-video" autoPlay muted loop playsInline disablePictureInPicture preload="auto" poster="/demo/poster.png" width="1440" height="922" aria-label="Synk demo: writing and collaborating in the Field Notes notebook">
              <source src="/demo/synk-demo.mp4" type="video/mp4" />
              <source src="/demo/synk-demo.webm" type="video/webm" />
              Your browser does not support embedded video. <a href="/demo/synk-demo.mp4">Download the demo</a>.
            </video>
          </figure>
          <div className="editor-details">
            <div>
              <h2>Room for the whole thought.</h2>
              <p>Headings, lists, images, and checkboxes, right where you write.
                Organize notes in a way that makes sense to you.</p>
            </div>
            <div>
              <h2>See each other writing.</h2>
              <p>Collaborator cursors show who's working where. Edits appear in
                the same note as you type.</p>
            </div>
          </div>
        </section>

        <section id="how" className="how-section section-wrap" aria-labelledby="how-title">
          <div className="how-heading">
            <h2 id="how-title" className="section-title">What happens<br />to your notes?</h2>
          </div>
          <dl className="sync-details">
            <div>
              <dt>They're saved in your browser.</dt>
              <dd>Keep writing when your connection drops. Your notes are stored
                on this device, so you don't need to wait for a server to save an edit.</dd>
            </div>
            <div>
              <dt>Connected users exchange peer-to-peer.</dt>
              <dd>A signaling server helps browsers find each other. Note content
                travels peer-to-peer between devices over encrypted connections. Devices need to be
                online at the same time to sync.</dd>
            </div>
            <div>
              <dt>Backup your notes.</dt>
              <dd>Clearing this site's browser data deletes its local notes.
                Export notes you want to keep to Markdown, and save a copy elsewhere.</dd>
            </div>
          </dl>
        </section>

        <section className="closing section-wrap" aria-labelledby="closing-title">
          <div>
            <h2 id="closing-title">Start with a note.</h2>
            <p>Synk is still in development. You can <a href="/roadmap/">follow the roadmap</a> or <a href={GITHUB_URL}>contribute to the project</a>.</p>
          </div>
          <a href={APP_URL} className="btn-primary">Open Synk <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
