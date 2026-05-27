"use client";

import { OwlLogo } from "./OwlLogo";

export function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 3rem",
        borderTop: "0.5px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="footer-resp"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <OwlLogo size={22} muted />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.85rem",
            color: "var(--muted)",
          }}
        >
          OwlSight AI
        </span>
      </div>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem",
          color: "var(--muted)",
          letterSpacing: "0.08em",
        }}
      >
        © 2026 OwlSight AI · All rights reserved
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-resp { flex-direction: column !important; gap: 1rem !important; text-align: center !important; padding: 1.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
