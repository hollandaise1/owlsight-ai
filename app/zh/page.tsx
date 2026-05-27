import type { Metadata } from "next";
import { zh } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Pillars } from "@/components/Pillars";
import { WhoGrid } from "@/components/WhoGrid";
import { Approach } from "@/components/Approach";
import { Differentiators } from "@/components/Differentiators";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "OwlSight AI — AI 原生 Analytics 咨询",
  description:
    "VC 级别 Analytics、AI Observability、GTM 测量科学与高管运营模型——深度嵌入你团队的高级 Analytics 咨询服务。",
};

export default function ZhHome() {
  return (
    <>
      <Nav content={zh.nav} />
      <Hero content={zh.hero} />
      <Ticker items={zh.ticker} />
      <Pillars content={zh.pillars} />
      <WhoGrid content={zh.who} />
      <Approach content={zh.approach} />
      <Differentiators content={zh.diff} />
      <CTA content={zh.cta} />
      <Footer content={zh.footer} />
    </>
  );
}
