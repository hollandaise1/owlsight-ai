"use client";

const items = [
  "Big Four-Grade Consulting",
  "VC-Grade Analytics",
  "AI Agent Observability",
  "Marketing Attribution",
  "Customer Lifetime Value",
  "Segmentation Predictions",
  "A/B Testing",
  "GTM Measurement Science",
  "Incrementality Modeling",
  "Executive Operating Model",
  "WBR / MBR Systems",
  "VC Portfolio Support",
];

export function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
        padding: "0.85rem 0",
        overflow: "hidden",
      }}
    >
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {item}
            <span style={{ color: "var(--amber)", fontSize: "0.5rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
