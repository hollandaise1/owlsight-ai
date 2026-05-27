"use client";

import { FadeIn } from "./FadeIn";
import { OwlLogo } from "./OwlLogo";
import type { SiteContent } from "@/lib/content";

interface ApproachProps {
  content: SiteContent["approach"];
}

export function Approach({ content }: ApproachProps) {
  const [heading1, heading2] = content.heading.split("\n");

  return (
    <section id="approach" style={{ padding: "0 3rem 5.5rem", maxWidth: "1080px", margin: "0 auto" }} className="approach-section">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="approach-grid">
        <FadeIn>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", color: "var(--amber)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--amber)" }} />
            {content.label}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.9rem" }}>
            {heading1}<br />{heading2}
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.85, maxWidth: "560px", marginBottom: "2rem" }}>
            {content.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {content.steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.07}>
                <div style={{ display: "grid", gridTemplateColumns: "2.25rem 1fr", gap: "0.75rem", padding: "1.5rem 0", borderBottom: i < content.steps.length - 1 ? "0.5px solid var(--border-faint)" : "none", alignItems: "start" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "var(--amber)", letterSpacing: "0.1em", paddingTop: "0.05rem" }}>{step.n}</span>
                  <div>
                    <h4 style={{ fontSize: "0.88rem", fontWeight: 400, color: "var(--parchment)", marginBottom: "0.3rem" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ background: "var(--card)", border: "0.5px solid var(--card-border)", borderRadius: "16px", padding: "2.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem", paddingBottom: "1.5rem", borderBottom: "0.5px solid var(--border-faint)" }}>
              <OwlLogo size={36} />
              <div>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", color: "var(--amber)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                  {content.whyLabel}
                </p>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 400, color: "var(--parchment)" }}>
                  {content.whyTagline}
                </h4>
              </div>
            </div>

            {content.whyPoints.map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: i < content.whyPoints.length - 1 ? "1.1rem" : 0 }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--amber)", flexShrink: 0, marginTop: "0.45rem" }} />
                <p style={{ fontSize: "0.81rem", color: "var(--muted)", lineHeight: 1.65 }}>{point}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .approach-section { padding: 0 1.5rem 3.5rem !important; }
          .approach-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
