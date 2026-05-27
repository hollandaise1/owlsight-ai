"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import type { SiteContent } from "@/lib/content";

interface DifferentiatorsProps {
  content: SiteContent["diff"];
}

export function Differentiators({ content }: DifferentiatorsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [heading1, heading2] = content.heading.split("\n");

  return (
    <section style={{ padding: "0 3rem 5.5rem", maxWidth: "1080px", margin: "0 auto" }} className="diff-section">
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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1rem" }} className="diff-grid">
        {content.cards.map((card, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ background: "var(--card)", border: `0.5px solid ${hovered === i ? "rgba(200,135,10,0.3)" : "var(--card-border)"}`, borderRadius: "14px", padding: "1.75rem", transition: "border-color 0.25s", height: "100%" }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", color: "var(--amber)", letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: "0.85rem" }}>{card.kicker}</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 400, marginBottom: "0.5rem", lineHeight: 1.2, color: "var(--parchment)" }}>{card.title}</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .diff-section { padding: 0 1.5rem 3.5rem !important; }
          .diff-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
