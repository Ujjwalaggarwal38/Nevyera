import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/motion/Marquee";
import { Hero } from "@/components/sections/Hero";
import { TheCount } from "@/components/sections/TheCount";
import { Statement } from "@/components/sections/Statement";
import { Solutions } from "@/components/sections/Solutions";
import { Story } from "@/components/sections/Story";
import { Editorial } from "@/components/sections/Editorial";
import { Proof } from "@/components/sections/Proof";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { DemoCta } from "@/components/sections/DemoCta";
import { servedBusinesses } from "@/content/site";

/**
 * Homepage. Ported from demo/v5.html, which remains the visual reference.
 *
 * The order matters and the variety matters more: no two sections are built to
 * the same template, and the marquee breaks the vertical stack early. Six
 * identically-structured sections is what made an earlier draft read as
 * machine-generated.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee items={servedBusinesses} />
      <TheCount />
      <Statement />
      <Solutions />
      <Story />
      <Editorial />
      <Proof />
      <PricingPreview />
      <DemoCta />
      <Footer />
    </>
  );
}
