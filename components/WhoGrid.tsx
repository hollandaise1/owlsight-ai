"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const cells = [
  {
    tag: "Founders & executives",
    title: "You're growing fast and your reporting hasn't kept up.",
    desc: "Metrics live in Notion, boards ask questions you can't answer, and the next raise is coming. You need the intelligence layer built properly — now.",
  },
  {
    tag: "AI product teams",
    title: "You're shipping AI features but can't measure them like a business.",
    desc: "You can build models. You can't yet show investors or enterprise buyers that they work. That's the gap OwlSight closes.",
  },
  {
    tag: "Growth & revenue leaders",
    title: "You're spending across channels with no attribution confidence.",
    desc: "Campaigns running, results visible — but no causal clarity on what's driving them. We build the measurement science, not more dashboards.",
  },
  {
    tag: "Ops & strategy leaders",
    title: "Running a company without a shared definition of what's working.",
    desc: "No WBR cadence, no KPI ownership, no single source of truth. We build the operating intelligence layer that lets your leadership team make fast, aligned decisions.",
  },
];

export function WhoGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="about"
      style={{ padding: "0 3rem 5.5rem", maxWidth: "1080px", margin: "0 auto" }}
      className="who-section"
    >
      <FadeIn>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.62rem",
            color: "var(--amber)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--amber)" }} />
          Who we work with
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "0.9rem",
          }}
        >
          Built for operators<br />who move fast.
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.9rem",
            lineHeight: 1.85,
            maxWidth: "560px",
            marginBottom: "3rem",
          }}
        >
          OwlSight AI works with growth-stage startups and VC portfolios that need senior analytics intelligence — delivered without the enterprise price tag or agency overhead.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "var(--border)",
            border: "0.5px solid var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
          className="who-grid-inner"
        >
          {cells.map((cell, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? "var(--card)" : "var(--ink)",
                padding: "2rem 2.25rem",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  color: "var(--amber)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.9rem",
                }}
              >
                {cell.tag}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                  lineHeight: 1.25,
                  color: "var(--parchment)",
                }}
              >
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
