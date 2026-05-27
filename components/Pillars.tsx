"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const pillars = [
  {
    num: "01",
    tag: "Investor-ready",
    title: "VC-Grade Analytics",
    desc: "Fundraising metrics, board-ready dashboards, and investor narrative built from your data. KPI storytelling, deck-ready charts, and the unit economics your next round will demand — structured before the data room opens.",
    chips: ["fundraising metrics", "board dashboards", "investor narrative", "KPI storytelling", "deck-ready charts", "VC portfolio support"],
    personas: ["Founder / CEO", "COO / Chief of Staff", "VP Finance / Fractional CFO", "VC portfolio support"],
  },
  {
    num: "02",
    tag: "AI-native",
    title: "AI Observability & Analytics",
    desc: "Measure your AI products the way sophisticated buyers expect. Agent quality, AI product usage, cost and latency tracking, hallucination and failure monitoring — and AI ROI dashboards that turn model performance into a business story.",
    chips: ["AI product usage", "agent quality", "cost & latency", "hallucination tracking", "failure monitoring", "AI ROI dashboards"],
    personas: ["AI startup founder", "Head of Product / AI PM", "CTO", "ML / AI Engineering Lead"],
  },
  {
    num: "03",
    tag: "GTM measurement science",
    title: "GTM Measurement Science",
    desc: "Marketing attribution, GTM strategy, causal and incrementality modeling, A/B test design, and ROI analysis — grounded in science, not correlation. Know which channels, campaigns, and segments actually drive revenue, customer lifetime value, and sustainable growth.",
    chips: ["marketing attribution", "customer LTV", "segmentation predictions", "incrementality modeling", "A/B test design", "GTM strategy", "ROI analysis"],
    personas: ["Head of Growth / VP Marketing", "CRO / RevOps Lead", "Product Growth Lead", "CFO"],
  },
  {
    num: "04",
    tag: "Operational excellence",
    title: "Executive Operating Model",
    desc: "WBR/MBR systems, operating plan metrics, metric definitions, KPI ownership, and executive business reviews — the data-driven operating discipline that the world's best-run companies are built on, applied to your org at your scale.",
    chips: ["WBR / MBR systems", "operating plan metrics", "metric definitions", "KPI ownership", "executive business reviews", "Big Four-grade deliverables"],
    personas: ["COO / CEO", "Chief of Staff / BizOps Lead", "Strategy & Ops Lead", "VP Product"],
  },
];

export function Pillars() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{ padding: "5.5rem 3rem", maxWidth: "1080px", margin: "0 auto" }}
      className="section-resp"
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
          Four pillars
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
          What OwlSight AI<br />actually delivers.
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
          Four intelligence pillars — each mapped to a specific buyer and business question. Pick the one that fits your problem today.
        </p>
      </FadeIn>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          border: "0.5px solid var(--border)",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        {pillars.map((p, i) => (
          <FadeIn key={p.num} delay={i * 0.08}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto",
                borderBottom: i < pillars.length - 1 ? "0.5px solid var(--border-faint)" : "none",
                background: hovered === i ? "var(--card)" : "transparent",
                transition: "background 0.2s",
                cursor: "default",
              }}
              className="pillar-grid"
            >
              {/* number */}
              <div style={{ padding: "2.5rem 0 2.5rem 2.5rem", paddingTop: "2.75rem" }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    color: "var(--amber)",
                    letterSpacing: "0.12em",
                    opacity: 0.7,
                  }}
                >
                  {p.num}
                </span>
              </div>

              {/* body */}
              <div style={{ padding: "2.5rem 2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.58rem",
                      color: "var(--amber)",
                      background: "rgba(200,135,10,0.1)",
                      border: "0.5px solid var(--border)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "2rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    marginBottom: "0.6rem",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.83rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        color: "var(--muted)",
                        border: "0.5px solid var(--border-faint)",
                        padding: "0.18rem 0.55rem",
                        borderRadius: "2rem",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* personas */}
              <div
                style={{
                  padding: "2.5rem 2.5rem 2.5rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  minWidth: "200px",
                  borderLeft: "0.5px solid var(--border-faint)",
                }}
                className="pillar-persona"
              >
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.58rem",
                    color: "var(--muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    paddingTop: "0.25rem",
                  }}
                >
                  Best-fit buyers
                </p>
                {p.personas.map((persona) => (
                  <div key={persona} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--amber)",
                        flexShrink: 0,
                        marginTop: "0.4rem",
                        opacity: 0.7,
                      }}
                    />
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
