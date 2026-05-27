"use client";

import { OwlLogo } from "./OwlLogo";
import type { SiteContent } from "@/lib/content";

interface FooterProps {
  content: SiteContent["footer"];
}

export function Footer({ content }: FooterProps) {
  return (
    <footer style={{ padding: "2rem 3rem", borderTop: "0.5px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }} className="footer-resp">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <OwlLogo size={22} muted />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1 }}>
            OwlSight AI
          </span>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.5rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.55, lineHeight: 1 }}>
            AI-Native Analytics Advisory
          </span>
        </div>
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.08em" }}>
        {content.copyright}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-resp { flex-direction: column !important; gap: 1rem !important; text-align: center !important; padding: 1.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
