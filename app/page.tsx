import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/motion/Marquee";
import { Hero } from "@/components/sections/Hero";
import { TheCount } from "@/components/sections/TheCount";
import { Statement } from "@/components/sections/Statement";
import { Solutions } from "@/components/sections/Solutions";
import { SolutionProvider } from "@/components/sections/SolutionContext";
import { Story } from "@/components/sections/Story";
import { Editorial } from "@/components/sections/Editorial";
import { Proof } from "@/components/sections/Proof";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { DemoCta } from "@/components/sections/DemoCta";
import { servedBusinesses } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee items={servedBusinesses} />
      <TheCount />
      <Statement />
      <SolutionProvider>
        <Solutions />
        <Story />
      </SolutionProvider>
      <Editorial />
      <Proof />
      <PricingPreview />
      <DemoCta />
      <Footer />
    </>
  );
}
