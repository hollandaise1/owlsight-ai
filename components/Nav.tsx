"use client";

import { useState, useEffect } from "react";
import { OwlLogo } from "./OwlLogo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.35rem 3rem",
        borderBottom: "0.5px solid var(--border)",
        position: "sticky",
        top: 0,
        background: scrolled
          ? "rgba(14,12,8,0.98)"
          : "rgba(14,12,8,0.92)",
        backdropFilter: "blur(20px)",
        zIndex: 100,
        transition: "background 0.3s",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
        <OwlLogo size={32} />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "var(--parchment)",
            letterSpacing: "-0.01em",
          }}
        >
          OwlSight <span style={{ color: "var(--amber)" }}>AI</span>
        </span>
      </a>

      {/* desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
        }}
        className="hidden-mobile"
      >
        {[["#services", "services"], ["#approach", "approach"], ["#about", "about"]].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--parchment)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:hello@owlsight.ai"
        style={{
          background: "var(--amber)",
          color: "var(--ink)",
          padding: "0.5rem 1.25rem",
          borderRadius: "2rem",
          fontSize: "0.75rem",
          fontWeight: 500,
          textDecoration: "none",
          letterSpacing: "0.05em",
          fontFamily: "'IBM Plex Mono', monospace",
          transition: "all 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--amber-dim)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--amber)")}
      >
        Book a call →
      </a>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </nav>
  );
}
