"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import type { SiteContent } from "@/lib/content";

interface PillarsProps {
  content: SiteContent["pillars"];
}

export function Pillars({ content }: PillarsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [heading1, heading2] = content.heading.split("\n");

  return (
    <section id="services" style={{ padding: "5.5rem 3rem", maxWidth: "1080px", margin: "0 auto" }} className="section-resp">
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

      <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "0.5px solid var(--border)", borderRadius: "18px", overflow: "hidden" }}>
        {content.items.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.08}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid", gridTemplateColumns: "64px 1fr auto",
                borderBottom: i < content.items.length - 1 ? "0.5px solid var(--border-faint)" : "none",
                background: hovered === i ? "var(--card)" : "transparent",
                transition: "background 0.2s", cursor: "default",
              }}
              className="pillar-grid"
            >
              <div style={{ padding: "2.5rem 0 2.5rem 2.5rem", paddingTop: "2.75rem" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "var(--amber)", letterSpacing: "0.12em", opacity: 0.7 }}>{p.num}</span>
              </div>

              <div style={{ padding: "2.5rem 2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", color: "var(--amber)", background: "rgba(200,135,10,0.1)", border: "0.5px solid var(--border)", padding: "0.2rem 0.6rem", borderRadius: "2rem", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    {p.tag}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 400, marginBottom: "0.6rem", lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.chips.map((chip) => (
                    <span key={chip} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "var(--muted)", border: "0.5px solid var(--border-faint)", padding: "0.18rem 0.55rem", borderRadius: "2rem", letterSpacing: "0.07em" }}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ padding: "2.5rem 2.5rem 2.5rem 1rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", minWidth: "200px", borderLeft: "0.5px solid var(--border-faint)" }} className="pillar-persona">
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem", paddingTop: "0.25rem" }}>
                  {content.buyersLabel}
                </p>
                {p.personas.map((persona) => (
                  <div key={persona} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--amber)", flexShrink: 0, marginTop: "0.4rem", opacity: 0.7 }} />
                    <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.5 }}>{persona}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-resp { padding: 3.5rem 1.5rem !important; }
          .pillar-grid { grid-template-columns: 1fr !important; }
          .pillar-persona { border-left: none !important; border-top: 0.5px solid var(--border-faint) !important; min-width: unset !important; padding: 1rem 1.5rem 2rem !important; }
        }
      `}</style>
    </section>
  );
}
