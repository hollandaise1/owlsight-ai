"use client";

import type { SiteContent } from "@/lib/content";

interface TickerProps {
  items: SiteContent["ticker"];
}

export function Ticker({ items }: TickerProps) {
  const doubled = [...items, ...items];

  return (
    <div style={{ borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", padding: "0.85rem 0", overflow: "hidden" }}>
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.65rem", color: "var(--muted)",
              letterSpacing: "0.1em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "1rem",
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
