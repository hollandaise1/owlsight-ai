import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OwlSight AI — AI-Native Analytics Advisory",
  description:
    "VC-grade analytics, AI observability, GTM measurement science, and executive operating models — an AI-native advisory firm embedded in your team.",
  openGraph: {
    title: "OwlSight AI — AI-Native Analytics Advisory",
    description:
      "An AI-native analytics advisory firm. Senior analytics and AI leadership embedded in your team. VC & portfolio support · AI Observability · GTM Measurement · Executive Operating Model.",
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
