import { Nav, SiteFooter } from "./Layout"

type RoadmapItem = { tag: string; title: string; body: string }

const SHIPPED: RoadmapItem[] = [
  { tag: "Editor", title: "Real-time collaborative editing", body: "Type together with cursors, selections, and edits appearing instantly." },
  { tag: "Sync", title: "Peer-to-peer sync", body: "Devices connect and sync directly over encrypted channels — no server in between." },
  { tag: "Organize", title: "Notebooks & folders", body: "Nest notes into notebooks and folders that sync along with the content." },
]

const IN_PROGRESS: RoadmapItem[] = [
  { tag: "Sharing", title: "Encrypted collaboration", body: "End-to-end encrypted notebook sharing with decentralized, capability-based access control." },
  { tag: "History", title: "Note history", body: "Browse previous versions, compare changes, and restore any point in time." },
]

const PLANNED: RoadmapItem[] = [
  { tag: "Linking", title: "Bidirectional links", body: "Connect notes with wiki-style links and automatically discover backlinks." },
  { tag: "Canvas", title: "Collaborative drawing", body: "Sketch ideas together in real time on an infinite canvas." },
  { tag: "Mobile", title: "Mobile support", body: "A responsive interface designed for phones and tablets." },
]

export default function Roadmap() {
  return (
    <div className="page">
      <Nav page="roadmap" />

      <section className="roadmap-hero section-wrap">
        <div className="section-eyebrow">Roadmap</div>
        <h1 className="roadmap-title">Where Synk is headed.</h1>
        <p className="roadmap-subtitle">
          What's shipped, what's in progress, and what's planned.
        </p>
      </section>

      <section className="roadmap-board section-wrap">
        <RoadmapColumn status="shipped" label="Shipped" items={SHIPPED} />
        <RoadmapColumn status="progress" label="In progress" items={IN_PROGRESS} />
        <RoadmapColumn status="planned" label="Planned" items={PLANNED} />
      </section>

      <SiteFooter />
    </div>
  )
}

function RoadmapColumn({
  status,
  label,
  items,
}: {
  status: "shipped" | "progress" | "planned"
  label: string
  items: RoadmapItem[]
}) {
  return (
    <div className="roadmap-column">
      <div className="roadmap-column-head">
        <span className={`roadmap-dot roadmap-dot--${status}`} />
        <span className="roadmap-column-label">{label}</span>
        <span className="roadmap-column-count">{String(items.length).padStart(2, "0")}</span>
      </div>
      <div className="roadmap-cards">
        {items.map((item) => (
          <RoadmapCard key={item.title} status={status} item={item} />
        ))}
      </div>
    </div>
  )
}

function RoadmapCard({ status, item }: { status: "shipped" | "progress" | "planned"; item: RoadmapItem }) {
  return (
    <div className="roadmap-card">
      <span className={`roadmap-tag roadmap-tag--${status}`}>{item.tag}</span>
      <h3 className="roadmap-card-title">{item.title}</h3>
      <p className="roadmap-card-body">{item.body}</p>
    </div>
  )
}
