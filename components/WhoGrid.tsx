"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import type { SiteContent } from "@/lib/content";

interface WhoGridProps {
  content: SiteContent["who"];
}

export function WhoGrid({ content }: WhoGridProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [heading1, heading2] = content.heading.split("\n");

  return (
    <section id="about" style={{ padding: "0 3rem 5.5rem", maxWidth: "1080px", margin: "0 auto" }} className="who-section">
      <FadeIn>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", color: "var(--amber)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--amber)" }} />
          {content.label}
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.9rem" }}>
          {heading1}<br />{heading2}
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: "560px", marginBottom: "3rem" }}>
          {content.intro}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "0.5px solid var(--border)", borderRadius: "16px", overflow: "hidden" }} className="who-grid-inner">
          {content.cells.map((cell, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ background: hovered === i ? "var(--card)" : "var(--ink)", padding: "2rem 2.25rem", transition: "background 0.2s" }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "var(--amber)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.9rem" }}>
                {cell.tag}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 400, marginBottom: "0.5rem", lineHeight: 1.25, color: "var(--parchment)" }}>
                {cell.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.75 }}>{cell.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          .who-section { padding: 0 1.5rem 3.5rem !important; }
          .who-grid-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
