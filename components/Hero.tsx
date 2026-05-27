"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section style={{ padding: "6rem 3rem 5rem", maxWidth: "1080px", margin: "0 auto" }}>
      <motion.div
        initial="hidden"
        animate="show"
        custom={0}
        variants={fadeUp}
        style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}
      >
        <div style={{ width: "28px", height: "0.5px", background: "var(--amber)" }} />
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--amber)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          VC Analytics · AI Observability · GTM Science · Executive Operating Model
        </span>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "end",
        }}
        className="hero-layout"
      >
        <motion.div initial="hidden" animate="show" custom={1} variants={fadeUp}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 1.0,
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            VC-grade.<br />
            AI-native.<br />
            <em style={{ fontStyle: "italic", color: "var(--amber)" }}>Executive</em><br />
            operating<br />
            model.
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          style={{ paddingBottom: "0.5rem" }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            Senior analytics and AI leadership — embedded in your team. VC &amp; portfolio support · AI Agent Observability · Marketing Attribution &amp; CLV · Segmentation &amp; A/B Testing · Executive Operating Model.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:hello@owlsight.ai"
              className="btn-primary"
              style={{
                background: "var(--amber)",
                color: "var(--ink)",
                padding: "0.8rem 1.75rem",
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
              Free architecture review →
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
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--parchment)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
            >
              See the four pillars →
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        custom={3}
        variants={fadeUp}
        style={{
          marginTop: "3.5rem",
          paddingTop: "3rem",
          borderTop: "0.5px solid var(--border-faint)",
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { val: "AWS", label: "Certified practitioner" },
          { val: "Big 4", label: "Consulting rigour" },
          { val: "4", label: "Service pillars" },
          { val: "C-suite", label: "Practitioner, not a pitch team" },
        ].map(({ val, label }) => (
          <div key={label}>
            <span
              style={{
                display: "block",
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontWeight: 400,
                color: "var(--amber)",
                lineHeight: 1,
              }}
            >
              {val}
            </span>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.62rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "0.35rem",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
          section { padding: 3.5rem 1.5rem 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
