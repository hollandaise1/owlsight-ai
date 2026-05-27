import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OwlSight AI — Analytics & AI Intelligence",
  description:
    "VC-grade analytics, AI observability, GTM measurement science, and executive operating models — embedded senior analytics intelligence without enterprise overhead.",
  openGraph: {
    title: "OwlSight AI — Analytics & AI Intelligence",
    description:
      "Senior analytics and AI leadership embedded in your team. VC & portfolio support · AI Agent Observability · Marketing Attribution & CLV · Executive Operating Model.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
