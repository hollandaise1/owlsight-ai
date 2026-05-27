"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { OwlLogo } from "./OwlLogo";
import type { SiteContent } from "@/lib/content";

interface NavProps {
  content: SiteContent["nav"];
}

export function Nav({ content }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [tipVisible, setTipVisible] = useState(false);
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");

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
        background: scrolled ? "rgba(14,12,8,0.98)" : "rgba(14,12,8,0.92)",
        backdropFilter: "blur(20px)",
        zIndex: 100,
        transition: "background 0.3s",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
        <OwlLogo size={32} />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--parchment)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            OwlSight <span style={{ color: "var(--amber)" }}>AI</span>
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.52rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            {content.descriptor}
          </span>
        </div>
      </a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }} className="hidden-mobile">
        {[
          ["#services", content.services],
          ["#approach", content.approach],
          ["#about", content.about],
        ].map(([href, label]) => (
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

        {/* language toggle */}
        <li>
          <Link
            href={isZh ? "/" : "/zh"}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              fontFamily: "'IBM Plex Mono', monospace",
              border: "0.5px solid var(--border)",
              padding: "0.25rem 0.6rem",
              borderRadius: "2rem",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--amber)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--amber)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            {isZh ? "EN" : "中文"}
          </Link>
        </li>
      </ul>

      <div style={{ position: "relative" }}>
        <a
          href="https://calendar.app.google/81QiES5Z8scJqect6"
          target="_blank"
          rel="noopener noreferrer"
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
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--amber-dim)";
            setTipVisible(true);
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--amber)";
            setTipVisible(false);
          }}
        >
          {content.cta}
        </a>

        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            right: 0,
            background: "var(--card)",
            border: "0.5px solid var(--border)",
            borderRadius: "8px",
            padding: "0.55rem 0.9rem",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            opacity: tipVisible ? 1 : 0,
            transform: tipVisible ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.18s ease, transform 0.18s ease",
          }}
        >
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
            {content.tooltip}
          </span>
          <div
            style={{
              position: "absolute",
              bottom: "-5px",
              right: "1.1rem",
              width: "8px",
              height: "8px",
              background: "var(--card)",
              border: "0.5px solid var(--border)",
              borderTop: "none",
              borderLeft: "none",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </nav>
  );
}
