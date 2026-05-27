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
      <Nav />
      <Hero />
      <Ticker />
      <Pillars />
      <WhoGrid />
      <Approach />
      <Differentiators />
      <CTA />
      <Footer />
    </>
  );
}
