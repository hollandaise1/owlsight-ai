"use client";

import { FadeIn } from "./FadeIn";
import { OwlLogo } from "./OwlLogo";

const steps = [
  {
    n: "01",
    title: "Free architecture review & diagnostic",
    desc: "A structured look at your data stack, intelligence gaps, and what's worth fixing first. I tell you honestly whether OwlSight is the right fit — no pitch, no pressure.",
  },
  {
    n: "02",
    title: "One-page scope in 48 hours",
    desc: "Clear deliverables, clear timeline. You decide in your own time — no chasing, no manufactured urgency.",
  },
  {
    n: "03",
    title: "A tangible win in week one",
    desc: "By end of week one, you'll have something real — a KPI framework, a live dashboard, or complete clarity on the path forward.",
  },
  {
    n: "04",
    title: "Async-first, always on",
    desc: "Slack, Loom, Notion. I move the way your team already moves — embedded in your rhythm, not added to your overhead.",
  },
];

const whyPoints = [
  "AWS-certified with executive BI background built inside one of the world's largest e-commerce environments",
  "Big Four-grade consulting deliverables — structured, presentation-ready, and built to survive scrutiny from investors, boards, and enterprise buyers",
  "Real causal inference and incrementality modeling — not just dashboards that describe the past",
  "AI observability experience baked in — built for the companies shipping LLM features in production",
  "Startup operating cadence — async by default, no bureaucracy, no account managers, just outcomes",
];

export function Approach() {
  return (
    <section
      id="approach"
      style={{ padding: "0 3rem 5.5rem", maxWidth: "1080px", margin: "0 auto" }}
      className="approach-section"
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
        className="approach-grid"
      >
        {/* left */}
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
            The approach
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
            How OwlSight<br />works with you.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              lineHeight: 1.85,
              maxWidth: "560px",
              marginBottom: "2rem",
            }}
          >
            No bloated discovery. No 40-page proposals. Embedded, async-first, and built around outcomes — not hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.07}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2.25rem 1fr",
                    gap: "0.75rem",
                    padding: "1.5rem 0",
                    borderBottom: i < steps.length - 1 ? "0.5px solid var(--border-faint)" : "none",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem",
                      color: "var(--amber)",
                      letterSpacing: "0.1em",
                      paddingTop: "0.05rem",
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        color: "var(--parchment)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* right — why card */}
        <FadeIn delay={0.15}>
          <div
            style={{
              background: "var(--card)",
              border: "0.5px solid var(--card-border)",
              borderRadius: "16px",
              padding: "2.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.75rem",
                paddingBottom: "1.5rem",
                borderBottom: "0.5px solid var(--border-faint)",
              }}
            >
              <OwlLogo size={36} />
              <div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.58rem",
                    color: "var(--amber)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  Why OwlSight AI
                </p>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "var(--parchment)",
                  }}
                >
                  The owl sees what others miss.
                </h4>
              </div>
            </div>

            {whyPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: i < whyPoints.length - 1 ? "1.1rem" : 0,
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--amber)",
                    flexShrink: 0,
                    marginTop: "0.45rem",
                  }}
                />
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
