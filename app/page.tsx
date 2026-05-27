import { en } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Pillars } from "@/components/Pillars";
import { WhoGrid } from "@/components/WhoGrid";
import { Approach } from "@/components/Approach";
import { Differentiators } from "@/components/Differentiators";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav content={en.nav} />
      <Hero content={en.hero} />
      <Ticker items={en.ticker} />
      <Pillars content={en.pillars} />
      <WhoGrid content={en.who} />
      <Approach content={en.approach} />
      <Differentiators content={en.diff} />
      <CTA content={en.cta} />
      <Footer content={en.footer} />
    </>
  );
}
