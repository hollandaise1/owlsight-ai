"use client";

import { FadeIn } from "./FadeIn";

export function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: "5.5rem 3rem",
        borderTop: "0.5px solid var(--border)",
        textAlign: "center",
      }}
      className="cta-section"
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
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--amber)" }} />
          Ready to see clearly
          <span style={{ display: "block", width: "20px", height: "0.5px", background: "var(--amber)" }} />
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "700px",
            margin: "0 auto 1rem",
          }}
        >
          Your data should be your{" "}
          <br />
          <em style={{ fontStyle: "italic", color: "var(--amber)" }}>sharpest</em> competitive edge.
        </h2>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.9rem",
            marginBottom: "2.5rem",
            maxWidth: "460px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.85,
          }}
        >
          Request a free architecture review and diagnostic. No pitch, no obligation — a structured look at your data stack, intelligence gaps, and the highest-leverage moves available to you right now.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a
            href="mailto:hello@owlsight.ai"
            style={{
              background: "var(--amber)",
              color: "var(--ink)",
              padding: "0.9rem 2rem",
              borderRadius: "2rem",
              fontSize: "0.78rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              fontFamily: "'IBM Plex Mono', monospace",
              transition: "all 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--amber-dim)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--amber)")}
          >
            Request a free diagnostic →
          </a>
          <a
            href="#services"
            style={{
              color: "var(--muted)",
              fontSize: "0.78rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "color 0.2s",
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.06em",
              padding: "0.9rem 0",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--parchment)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
          >
            Review the four pillars →
          </a>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          .cta-section { padding: 3.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
