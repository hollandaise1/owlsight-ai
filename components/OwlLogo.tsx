"use client";

interface OwlLogoProps {
  size?: number;
  muted?: boolean;
}

export function OwlLogo({ size = 32, muted = false }: OwlLogoProps) {
  const s = muted ? "#7a7268" : "#c8870a";
  const bg = muted ? "none" : "#111009";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="18" rx="11" ry="12" fill={bg} stroke={s} strokeWidth="0.7" />
      <ellipse cx="16" cy="11" rx="10" ry="9" fill={bg} stroke={s} strokeWidth="0.7" />
      <ellipse cx="11" cy="10" rx="4" ry="4.5" fill={bg} stroke={s} strokeWidth="0.6" />
      <ellipse cx="21" cy="10" rx="4" ry="4.5" fill={bg} stroke={s} strokeWidth="0.6" />
      <circle cx="11" cy="10" r="2.4" fill={s} opacity="0.88" />
      <circle cx="21" cy="10" r="2.4" fill={s} opacity="0.88" />
      <circle cx="11.7" cy="9.3" r="1" fill="#0e0c08" />
      <circle cx="21.7" cy="9.3" r="1" fill="#0e0c08" />
      <circle cx="12.2" cy="8.8" r="0.38" fill={s} opacity="0.85" />
      <circle cx="22.2" cy="8.8" r="0.38" fill={s} opacity="0.85" />
      <path d="M14 13 L16 15 L18 13" stroke={s} strokeWidth="0.65" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {!muted && (
        <>
          <path d="M5 9 Q8 6 11 8" stroke={s} strokeWidth="0.55" strokeLinecap="round" fill="none" />
          <path d="M27 9 Q24 6 21 8" stroke={s} strokeWidth="0.55" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
}
